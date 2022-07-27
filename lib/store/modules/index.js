import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import foodReducer from './foodReducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({ foodReducer })(state, action);
  }
};

export default rootReducer;
