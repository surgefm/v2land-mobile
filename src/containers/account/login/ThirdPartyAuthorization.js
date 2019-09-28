import R from 'ramda';
import ThirdPartyAuthComponent from 'components/login/ThirdPartyAuthorization';

import {withNavigationOptions, withProps, connect} from 'enhancers';

import {resolve, format} from 'url';

import {getRaw} from 'services/auth';
import {saveToken, getUserInfo} from 'store/actions/auth';
import {authorizedSelector} from 'store/selectors/auth';

import routers from 'config/routers';
import config from 'config/const';

import {getTokenStringFromHeader} from 'util';

const ThirdPartyAuthorization = R.compose(
  withNavigationOptions({
    header: null,
  }),
  connect(
    {
      authorized: authorizedSelector,
    },
    {
      saveToken,
      getUserInfo,
    },
  ),
  withProps(({navigation}) => ({
    goTo(route, options) {
      navigation.popToTop();
      navigation.replace(route, options);
    },
  })),
  withProps(({navigation, saveToken, goTo}) => ({
    async redirect() {
      const {state} = navigation;
      if (!state.params) {
        goTo(routers.login);
        return {};
      }

      const {params} = state;
      let path = `${config.api}auth/${params.site}/redirect?`;
      if (params.site === 'twitter') {
        path += `token=${params.token}&verifier=${params.verifier}`;
      } else if (params.site === 'weibo') {
        path += `code=${params.code}&authId=${params.authId}`;
      } else {
        goTo(routers.login);
        return {};
      }

      try {
        await fetch(path, {withCredential: true});
        const requestUrl = format({
          pathname: resolve(config.api, 'oauth2/grant'),
          query: {
            grant_type: 'implicit_grant',
            authorizationClientId: config.authorizationClientId,
          },
        });
        const response = await fetch(requestUrl, {withCredential: true});
        const token = (await response.json()).accessToken.token;
        await saveToken(token);
        if ([200, 201].includes(response.status)) {
          goTo(routers.me);
          return {};
        } else if (
          response.status === 202 &&
          response.data.name === 'authentication required'
        ) {
          goTo(routers.registration);
          return {};
        } else if (
          response.status === 202 &&
          response.data.name === 'already connected'
        ) {
          goTo(routers.me);
          return {};
        }
      } catch (err) {
        goTo(routers.login);
        return {};
      }
    },
  })),
)(ThirdPartyAuthComponent);

export default ThirdPartyAuthorization;
