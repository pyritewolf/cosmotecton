const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
     case 'SET_WORLDS':
       return [...state, ...action.payload];
     default:
       return state;
   }
};