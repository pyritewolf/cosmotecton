export const logIn = async (username, password) => {
  const tokens = await fetch(`${process.env.REACT_APP_API}/api/token/`, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  console.log(tokens);
  return tokens.json();
}