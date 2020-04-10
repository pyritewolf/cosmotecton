export const saveWorld = async (worldDTO, user) => {
    const worldRequest = await fetch(`${process.env.REACT_APP_API}/api/world/`, {
      method: 'POST',
      body: JSON.stringify(worldDTO),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    });
    const world = await worldRequest.json();
    return world;
  }

export const fetchWorlds = async (user) => {
  const worldRequest = await fetch(`${process.env.REACT_APP_API}/api/world/`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  });
  const worlds = await worldRequest.json();
  return worlds;
}