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
    automaton.stringBox('', { box: 'loginName',    fill: 'setLoginName' }),
    automaton.stringBox('', { box: 'passwd',       fill: 'setPasswd' }),
    automaton.stringBox('', { box: 'errorMessage', fill: 'setErrorMessage' })
  ),
  withProps(({ loginName, passwd, setErrorMessage }) => ({
    onLoginClick: () => {
      if (!loginName) {
        setErrorMessage('请填写用户名')
        return;
      }

      if (!passwd) {
        setErrorMessage('请填写密码')
        return;
      }

      // else clean error message
      setErrorMessage('')
    }
  }))
)(LoginComponent);

export default Article;
