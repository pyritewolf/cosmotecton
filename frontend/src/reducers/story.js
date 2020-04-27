import {SET_STORY} from 'actions/story';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
     case SET_STORY:
       return {...action.payload};
     default:
       return state;
   }
};