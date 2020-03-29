import history from '../history';
import { logIn as logInAPI } from 'api/auth';

const LOG_IN = 'LOG_IN';
const SET_WORLDS = 'SET_WORLDS'

export const logIn = (username, password) => async (dispatch) => {
  const {worlds, ...user} = await logInAPI(username, password);
  history.push('/')
  dispatch({ type: LOG_IN, payload: user });
  dispatch({ type: SET_WORLDS, payload: worlds });
};

export { LOG_IN };