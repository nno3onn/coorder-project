// Action Types
export const SHOW_SHOPPING = 'SHOW_FOOD';
export const UPDATE_SHOPPING = 'UPDATE_FOOD';

// Action Creators
// export const testAction = (text) => ({ type: TEST, text });
export const showAction = (storeName) => ({ type: SHOW_SHOPPING, storeName });
export const updateAction = ({ storeName, foodName, foodCost, foodCnt, options }) => ({
  type: UPDATE_SHOPPING,
  storeName,
  foodName,
  foodCost,
  foodCnt,
  options,
});

// Initial State
const initialState = [];

// Reducer
const foodReducer = (state = initialState, action) => {
  console.log('foodReducer', state, action);

  switch (action.type) {
    case SHOW_SHOPPING:
      return state;

    case UPDATE_SHOPPING:
      const { storeName, foodName, foodCost, foodCnt, options } = action;
      const newState = [...state];

      if (state.length) {
        const findIndex = state.findIndex((s) => s.storeName === action.storeName && s.foodName === action.foodName);
        if (findIndex !== -1) {
          newState.splice(findIndex, 1);
        }
      }
      newState.push({ storeName, foodName, foodCost, foodCnt, options });
      return newState;
    default:
      return state;
  }
};

export default foodReducer;
