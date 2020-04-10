import api from './utils';

export const saveWorld = async (worldDTO, user) => {
    const world = await api(`api/world/`, {
      method: 'POST',
      body: JSON.stringify(worldDTO),
    });
    return world;
  }

export const fetchWorlds = async (user) => {
  const worlds = await api(`api/world/`, {
    method: 'GET',
  });
  return worlds;
}