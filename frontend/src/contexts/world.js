import React, {createContext, useReducer, useEffect} from 'react';
import { useSelector } from 'react-redux';

import { fetchWorld } from 'api/worlds';

const initialState = {
    world: null,
    loading: false,
};
const store = createContext(initialState);
const { Provider } = store;

const WorldProvider = ( { children } ) => {
  const worlds = useSelector(state => state.worlds)

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'FETCH_WORLD':
        let world = worlds.find(w => w.id === parseInt(action.payload));
        return {
          ...state,
          world: {
            id: parseInt(action.payload),
            ...world,
          },
          loading: !world,
        };
      case 'SET_WORLD':
        return {...state, world: action.payload, loading: !action.payload};
      default:
        throw new Error(`What are you trying to do? Couldn't recognize action type ${action.type}`);
    };
  }, initialState);

  useEffect(() => {
    if (!(state.world && state.world.id && state.loading)) return;
    const fetchWorldFromAPI = async () => {
      let world = await fetchWorld(state.world.id);
      dispatch({type: 'SET_WORLD', payload: world})
    };
    fetchWorldFromAPI();
  }, [state.world, state.loading])

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, WorldProvider } 