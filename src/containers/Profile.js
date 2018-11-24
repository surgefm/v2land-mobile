import R from 'ramda';
import routers from '../config/routers';
import ProfileComponent from '../components/Profile.js';

import { withNavigationOptions, withNavigationHandlers } from '../enhancers';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) => {
    return {
      goLogin: () => replace(routers.login),
    };
  }),
)(ProfileComponent);

export default Article;
