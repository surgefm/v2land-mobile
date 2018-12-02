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

import {
  authorizedSelector,
  errorMessageSelector,
} from '../store/selectors/auth.js';

import { log } from '../util';

const Login = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace }) => ({
    goMe: () => replace(routers.me),
  })),
  connect(
    {
      authorized: authorizedSelector,
      serverErrorMessage: errorMessageSelector,
    },
    {
      login,
    },
  ),
  withProps(({ goMe, authorized }) => {
    if (authorized) {
      goMe();
    }
  }),
  withState(
    automaton.stringBox('', { box: 'loginName', fill: 'setLoginName' }),
    automaton.stringBox('', { box: 'passwd', fill: 'setPasswd' }),
    automaton.stringBox('', {
      box: 'clientErrorMessage',
      fill: 'setClientErrorMessage',
    }),
  ),
  withProps(
    ({
      loginName,
      passwd,
      setClientErrorMessage,
      login,
      clientErrorMessage,
      serverErrorMessage,
    }) => ({
      onLoginClick: () => {
        if (!loginName) {
          setClientErrorMessage('请填写用户名');
          return;
        }

        if (!passwd) {
          setClientErrorMessage('请填写密码');
          return;
        }

        // else clean error message
        setClientErrorMessage('');
        login({
          username: loginName,
          password: passwd,
        });
      },
      errorMessage: serverErrorMessage || clientErrorMessage,
    }),
  ),
)(LoginComponent);

export default Login;
