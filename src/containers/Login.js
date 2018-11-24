import R from 'ramda';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
  withState,
  automaton,
  withProps,
} from '../enhancers';

import { log } from '../util';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withState(
    automaton.stringBox('', { box: 'loginName', fill: 'setLoginName' }),
    automaton.stringBox('', { box: 'passwd',    fill: 'setPasswd' }),
  ),
  withProps(({ loginName, passwd }) => ({
    onLoginClick: () => {
      log(loginName, passwd);
      // TODO: not implemented
    }
  }))
)(LoginComponent);

export default Article;
