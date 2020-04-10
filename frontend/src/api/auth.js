import api from './utils';

export const logIn = async (username, password) => {
  const tokens = await api(`api/token/`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
  });
  
  const [user] = await api(`profile/`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokens.access}`}
  });
  return {
    ...user,
    token: tokens.access,
    refresh: tokens.refresh,
  }
}

export const refreshToken = async (user) => {
  const accessToken = await fetch(`${process.env.REACT_APP_API}/api/token/refresh/`, {
    method: 'POST',
    body: JSON.stringify({refresh: user.refresh}),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const {access, refresh} = await accessToken.json();
  return {
    token: access,
    refresh,
  }
}