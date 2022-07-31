// Action Types
export const SHOW_SHOPPING = 'SHOW_SHOPPING';
export const UPDATE_SHOPPING = 'UPDATE_SHOPPING';
export const DELETE_FOOD = 'DELETE_FOOD';
export const CLEAR_SHOPPING = 'CLEAR_SHOPPING';

export const showAction = (storeName) => ({ type: SHOW_SHOPPING, storeName });
export const updateAction = ({ storeName, foodName, foodCost, foodCnt, options }) => ({
  type: UPDATE_SHOPPING,
  storeName,
  foodName,
  foodCost,
  foodCnt,
  options,
});
export const deleteAction = ({ index }) => ({ type: DELETE_FOOD, index });
export const clearAction = () => ({ type: CLEAR_SHOPPING });

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

      // if (state.length) {
      //   const findIndex = state.findIndex((s) => s.storeName === action.storeName && s.foodName === action.foodName);
      //   if (findIndex !== -1) {
      //     newState.splice(findIndex, 1);
      //   }
      // }
      newState.push({ storeName, foodName, foodCost, foodCnt, options });
      return newState;

    case DELETE_FOOD:
      const { index } = action;
      console.log(index);
    // return [...state].splice(index, 1);

    case CLEAR_SHOPPING:
      return initialState;

    default:
      return state;
  }
};

export default foodReducer;
