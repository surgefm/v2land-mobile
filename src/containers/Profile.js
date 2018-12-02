import R from 'ramda';
import routers from '../config/routers';
import ProfileComponent from '../components/Profile.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  withProps,
} from '../enhancers';

import { invalidateToken } from '../store/actions/auth.js';

import { authorizedSelector } from '../store/selectors/auth.js';

const Profile = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) => ({
    goLogin: () => replace(routers.login),
  })),
  connect(
    {
      authorized: authorizedSelector,
    },
    {
      logout: invalidateToken,
    },
  ),
  withProps(({ authorized, goLogin }) => {
    if (!authorized) {
      goLogin();
    }
  }),
)(ProfileComponent);

export default Profile;
