import R from 'ramda';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
  withState,
  automaton,
  withProps,
  connect,
} from '../enhancers';

import { login } from '../store/actions/auth.js';

import { log } from '../util';

const Article = R.compose(
  withNavigationOptions({
    header: null,
  }),
  connect(
    null,
    {
      login,
    }
  ),
  withState(
    automaton.stringBox('', { box: 'loginName',    fill: 'setLoginName' }),
    automaton.stringBox('', { box: 'passwd',       fill: 'setPasswd' }),
    automaton.stringBox('', { box: 'errorMessage', fill: 'setErrorMessage' })
  ),
  withProps(({ loginName, passwd, setErrorMessage, login }) => ({
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
      login({
        loginName,
        password: passwd,
      })
    }
  }))
)(LoginComponent);

export default Article;
