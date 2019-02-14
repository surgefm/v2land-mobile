import R from 'ramda';
import ThirdPartyAuthComponent from '../../components/login/ThirdPartyAuthorization';

import {
  withNavigationOptions,
  withProps,
  connect,
} from '../../enhancers';

import { saveToken, getUserInfo } from '../../store/actions/auth.js';

import { authorizedSelector } from '../../store/selectors/auth.js';

import routers from '../../config/routers';
import config from '../../config/const';

import { getTokenStringFromHeader } from '../../util';

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
  withProps(({ navigation }) => ({
    goTo(route, options) {
      navigation.popToTop();
      navigation.replace(route, options);
    },
  })),
  withProps(({ navigation, saveToken, goTo }) => ({
    async redirect() {
      const { state } = navigation;
      if (!state.params) {
        goTo(routers.login);
        return {};
      }

      const { params } = state;
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
        const response = await fetch(path);
        const token = getTokenStringFromHeader(response.headers);
        await saveToken(token);
        if ([200, 201].includes(response.status)) {
          goTo(routers.me);
          return {};
        } else if (response.status === 202 &&
          response.data.name === 'authentication required') {
          goTo(routers.registration);
          return {};
        } else if (response.status === 202 &&
          response.data.name === 'already connected') {
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
