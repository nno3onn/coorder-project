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
  console.log(state, action);
  switch (action.type) {
    case SHOW_SHOPPING:
      return state;

    case UPDATE_SHOPPING:
      const { storeName, foodName, foodCost, foodCnt, options } = action;
      const newState = [...state];

      if (state.length) {
        const find = state.filter((s) => s.storeName === action.storeName && s.foodName === action.foodName);
        if (find) {
          const index = state.indexOf(find);
          newState.splice(index, 1);
        }
      }
      newState.push({ storeName, foodName, foodCost, foodCnt, options });
      return newState;
    default:
      return state;
  }
};

export default foodReducer;
