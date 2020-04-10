import history from '../history';
import { logIn as logInAPI } from 'api/auth';

const LOG_IN = 'LOG_IN';

export const logIn = (username, password) => async (dispatch) => {
  const {worlds, ...user} = await logInAPI(username, password);
  history.push('/')
  dispatch({ type: LOG_IN, payload: user });
};

export { LOG_IN };