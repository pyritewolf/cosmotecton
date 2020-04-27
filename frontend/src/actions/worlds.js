import { saveWorld as saveWorldAPI } from 'api/worlds';
import { fetchWorlds as fetchWorldsAPI } from 'api/worlds';

const SET_WORLDS = 'SET_WORLDS';

export const setWorlds = (worlds) => async (dispatch) => {
  dispatch({ type: SET_WORLDS, payload: worlds });
};

export const fetchWorlds = () => async (dispatch) => {
  const worlds = await fetchWorldsAPI();
  dispatch({ type: SET_WORLDS, payload: worlds });
};

export const saveWorld = (worldDTO) => async (dispatch) => {
  const world = await saveWorldAPI(worldDTO);
  dispatch({ type: SET_WORLDS, payload: [world] });
};

export { SET_WORLDS };