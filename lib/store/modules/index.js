import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import foodReducer from './foodReducer';
import placeReducer from './placeReducer';
import timeReducer from './timeReducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({ foodReducer, placeReducer, timeReducer })(state, action);
  }
};

export default rootReducer;
