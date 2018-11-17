import R from 'ramda';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
} from '../enhancers';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
)(LoginComponent);

export default Article;
