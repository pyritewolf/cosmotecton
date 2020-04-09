import { saveWorld as saveWorldAPI } from 'api/worlds';

const SET_WORLDS = 'SET_WORLDS';

export const setWorlds = (worlds) => async (dispatch) => {
  dispatch({ type: SET_WORLDS, payload: worlds });
};

export const saveWorld = (worldDTO) => async (dispatch, getState) => {
  const world = await saveWorldAPI(worldDTO, getState().auth);
  dispatch({ type: SET_WORLDS, payload: [world] });
};

export { SET_WORLDS };