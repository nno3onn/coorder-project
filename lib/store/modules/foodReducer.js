// Action Types
export const TEST = 'TEST';

// Action Creators
export const testAction = (text) => ({ type: TEST, text });

// Initial State
const initialState = [];

// Reducer
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return [...state, action.text];
    default:
      return state;
  }
};

export default foodReducer;
