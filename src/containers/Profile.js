import R from 'ramda';
import routers from '../config/routers';
import ProfileComponent from '../components/Profile.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  prepare,
} from '../enhancers';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) => {
    return {
      goLogin: () => replace(routers.login),
    };
  }),
  prepare(),
)(ProfileComponent);

export default Article;
