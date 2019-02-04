import R from 'ramda';
import routers from '../config/routers';
import RegistrationComponent from '../components/registration/Registration';

import validator from 'validator';

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

const Registration = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ replace, goBack }) => ({
    goMe: () => replace(routers.me),
    goBack,
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
    automaton.stringBox('', { box: 'username', fill: 'setUsername' }),
    automaton.stringBox('', { box: 'email', fill: 'setEmail' }),
    automaton.stringBox('', { box: 'password', fill: 'setPassword' }),
    automaton.stringBox('', {
      box: 'clientErrorMessage',
      fill: 'setClientErrorMessage',
    }),
    automaton.coin(false, { side: 'isDirty' }),
    automaton.box(false, { box: 'isLoading', fill: 'setLoading' }),
  ),
  addNavigationListener(
    'didBlur',
    ({ setUsername, setEmail, setPassword, flip }) => () => {
      setUsername('');
      setEmail('');
      setPassword('');
      flip(true);
    },
  ),
  withProps(
    ({
      username,
      email,
      password,
      setClientErrorMessage,
      register,
      clientErrorMessage,
      serverErrorMessage,
      isDirty,
      flip,
      setUsername,
      setEmail,
      setPassword,
      setLoading,
    }) => ({
      onRegisterClick: async () => {
        flip(false);
        setLoading(true);

        username = username.trim();
        if (!username) {
          setClientErrorMessage('请填写用户名');
          setLoading(false);
          return;
        }

        email = email.trim();
        if (!email || !validator.isEmail(email)) {
          setClientErrorMessage('请填写正确的邮箱');
          setLoading(false);
          return;
        }

        if (!password) {
          setClientErrorMessage('请填写密码');
          setLoading(false);
          return;
        }

        // else clean error message
        setClientErrorMessage('');
        await register({ username, email, password });
        setLoading(false);
      },
      errorMessage: isDirty ? '' : serverErrorMessage || clientErrorMessage,
      setUsername: (...args) => {
        flip(true);
        setUsername(...args);
      },
      setEmail: (...args) => {
        flip(true);
        setEmail(...args);
      },
      setPassword: (...args) => {
        flip(true);
        setPassword(...args);
      },
    }),
  ),
)(RegistrationComponent);

export default Registration;
