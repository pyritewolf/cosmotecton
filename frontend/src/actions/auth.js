import { logIn as logInAPI } from 'api/auth'

const LOG_IN = 'LOG_IN';

export const logIn = (username, password) => async (dispatch) => {
  const tokens = await logInAPI(username, password);
  return dispatch({ type: LOG_IN, payload: tokens });
};

export { LOG_IN };