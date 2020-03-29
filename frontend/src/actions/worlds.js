const SET_WORLDS = 'SET_WORLDS';

export const setWorlds = (worlds) => async (dispatch) => {
  dispatch({ type: SET_WORLDS, payload: worlds });
};

export { SET_WORLDS };