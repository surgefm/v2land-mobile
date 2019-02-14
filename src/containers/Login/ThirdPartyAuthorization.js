import R from 'ramda';
import ThirdPartyAuthComponent from '../../components/login/ThirdPartyAuthorization';

import {
  withNavigationOptions,
  withProps,
  connect,
} from '../../enhancers';

import { login, saveToken, getUserInfo } from '../../store/actions/auth.js';

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
      login,
      saveToken,
      getUserInfo,
    },
  ),
  withProps(({ navigation, saveToken }) => ({
    async redirect() {
      const { state } = navigation;
      if (!state.params) {
        navigation.replace(routers.login);
        return {};
      }

      const { params } = state;
      let path = `${config.api}auth/${params.site}/redirect?`;
      if (params.site === 'twitter') {
        path += `token=${params.token}&verifier=${params.verifier}`;
      } else if (params.site === 'weibo') {
        path += `code=${params.code}&authId=${params.authId}`;
      } else {
        navigation.replace(routers.login);
        return {};
      }

      try {
        const response = await fetch(path);
        const token = getTokenStringFromHeader(response.headers);
        await saveToken(token);
        if ([200, 201].includes(response.status)) {
          navigation.replace(routers.me);
          return {};
        } else if (response.status === 202 &&
          response.data.name === 'authentication required') {
          navigation.replace(routers.registration);
          return {};
        } else if (response.status === 202 &&
          response.data.name === 'already connected') {
          navigation.replace(routers.me);
          return {};
        }
      } catch (err) {
        navigation.replace(routers.login);
        return {};
      }
    },
  })),
)(ThirdPartyAuthComponent);

export default ThirdPartyAuthorization;
