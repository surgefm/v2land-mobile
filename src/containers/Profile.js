import R from 'ramda';
import routers from '../config/routers';
import ProfileComponent from '../components/Profile.js';

import { withNavigationOptions, withNavigationHandlers, connect, prepare } from '../enhancers';

import { authorizedSelector } from '../store/selectors/auth.js';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) =>
    ({
      goLogin: () => replace(routers.login),
    })
  ),
  connect({
    authorized: authorizedSelector,
  }),
  prepare(({ authorized, goLogin }) => {
    if (!authorized) {
      goLogin();
    }
  }),
)(ProfileComponent);

export default Article;
