import R from 'ramda';
import routers from 'config/routers';
import ProfileComponent from 'components/Profile';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  withProps,
} from 'enhancers';

import {invalidateToken, getUserInfo} from 'store/actions/auth';

import {authorizedSelector} from 'store/selectors/auth';
import {userNameSelector, userDisplayRoleSelector} from 'store/selectors/user';

const Profile = R.compose(
  withNavigationOptions({
    title: '个人页面',
  }),

  withNavigationHandlers(({replace}) => ({
    goLogin: () => replace(routers.login),
  })),

  connect(
    {
      authorized: authorizedSelector,
      username: userNameSelector,
      role: userDisplayRoleSelector,
    },
    {
      logout: invalidateToken,
      getUserInfo,
    },
  ),

  withProps(({authorized, goLogin, getUserInfo}) => {
    if (!authorized) {
      goLogin();
    } else {
      getUserInfo();
    }
  }),
)(ProfileComponent);

export default Profile;
