const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
     case 'LOG_IN':
       return {...action.payload};
     case 'LOG_OUT':
       return {};
     default:
       return state;
   }
};