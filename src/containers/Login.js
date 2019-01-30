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
  addNavigationListener,
} from '../enhancers';

import { login } from '../store/actions/auth.js';

import {
  authorizedSelector,
  errorMessageSelector,
} from '../store/selectors/auth.js';

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
    automaton.coin(false, { side: 'isDirty' }),
    automaton.box(false, { box: 'isLoading', fill: 'setLoading' }),
  ),
  addNavigationListener(
    'didBlur',
    ({ setLoginName, setPasswd, flip }) => () => {
      setLoginName('');
      setPasswd('');
      flip(true);
    },
  ),
  withProps(
    ({
      loginName,
      passwd,
      setClientErrorMessage,
      login,
      clientErrorMessage,
      serverErrorMessage,
      isDirty,
      flip,
      setLoginName,
      setPasswd,
      setLoading,
    }) => ({
      onLoginClick: async () => {
        flip(false);
        setLoading(true);

        loginName = loginName.trim();
        if (!loginName) {
          setClientErrorMessage('请填写用户名');
          setLoading(false);
          return;
        }

        if (!passwd) {
          setClientErrorMessage('请填写密码');
          setLoading(false);
          return;
        }

        // else clean error message
        setClientErrorMessage('');
        await login({
          username: loginName,
          password: passwd,
        });
        setLoading(false);
      },
      errorMessage: isDirty ? '' : serverErrorMessage || clientErrorMessage,
      setLoginName: (...args) => {
        flip(true);
        setLoginName(...args);
      },
      setPasswd: (...args) => {
        flip(true);
        setPasswd(...args);
      },
    }),
  ),
)(LoginComponent);

export default Login;
