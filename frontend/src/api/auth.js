export const logIn = async (username, password) => {
  const tokens = await fetch(`${process.env.REACT_APP_API}/api/token/`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const {refresh} = await tokens.json();

  const accessToken = await fetch(`${process.env.REACT_APP_API}/api/token/refresh/`, {
    method: 'POST',
    body: JSON.stringify({refresh}),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const {access} = await accessToken.json();
  return {token: access}
}