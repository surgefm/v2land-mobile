import R from 'ramda';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
  withState,
  automaton,
} from '../enhancers';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  // withState
)(LoginComponent);

export default Article;
