import api from './utils';

export const saveWorld = async (worldDTO) => {
    const world = await api(`api/world/`, {
      method: 'POST',
      body: JSON.stringify({...worldDTO, stories: []}),
    });
    return world;
  }

export const fetchWorlds = async () => {
  const worlds = await api(`api/world/`);
  return worlds;
}

export const fetchWorld = async (id) => {
  const world = await api(`api/world/${id}`);
  return world;
}

export const createStory = async (storyDTO) => {
  const story = await api(`api/story/`, {
    method: 'POST',
    body: JSON.stringify(storyDTO),
  });
  return story;
}