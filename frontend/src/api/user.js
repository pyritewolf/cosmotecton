// export const getUser = async (token) => {
//     const user = await fetch(`${process.env.REACT_APP_API}/api/token/`, {
//       method: 'POST',
//       body: JSON.stringify({username, password}),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     });
  
//     const {access} = await accessToken.json();
//     return {token: access}
//   }