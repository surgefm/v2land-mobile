import R from 'ramda';
import routers from '../config/routers';
import LoginComponent from '../components/Login.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  withState,
  automaton,
  withProps,
  connect,
} from '../enhancers';

import { login } from '../store/actions/auth.js';

import { authorizedSelector } from '../store/selectors/auth.js';

import { log } from '../util';

const Login = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) =>
    ({
      goMe: () => replace(routers.me),
    })
  ),
  connect(
    {
      authorized: authorizedSelector,
    },
    {
      login,
    }
  ),
  withProps(({ goMe, authorized }) => {
    if (authorized) {
      goMe();
    }
  }),
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
  })),
)(LoginComponent);

export default Login;
