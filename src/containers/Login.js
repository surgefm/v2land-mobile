import R from 'ramda';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
  prepare,
} from '../enhancers';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  prepare(),
)(LoginComponent);

export default Article;
