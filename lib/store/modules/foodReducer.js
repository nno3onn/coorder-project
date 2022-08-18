// Action Types
export const SHOW_SHOPPING = 'SHOW_SHOPPING';
export const UPDATE_SHOPPING = 'UPDATE_SHOPPING';
export const DELETE_FOOD = 'DELETE_FOOD';
export const CLEAR_SHOPPING = 'CLEAR_SHOPPING';

export const showAction = (storeCode) => ({ type: SHOW_SHOPPING, storeCode });
export const updateAction = ({ storeCode, foodName, foodCost, foodCode, foodCnt, options }) => ({
  type: UPDATE_SHOPPING,
  storeCode,
  foodName,
  foodCost,
  foodCode,
  foodCnt,
  options,
});
export const deleteAction = ({ index }) => ({ type: DELETE_FOOD, index });
export const clearAction = () => ({ type: CLEAR_SHOPPING });

// Initial State
const initialState = [];

// Reducer
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SHOPPING:
      return state;

    case UPDATE_SHOPPING:
      const { storeCode, foodName, foodCost, foodCode, foodCnt, options } = action;
      const newState = [...state];
      newState.push({ storeCode, foodName, foodCost, foodCode, foodCnt, options });
      return newState;

    case DELETE_FOOD:
      const { index } = action;
      const deletedState = [...state];
      deletedState.splice(index, 1);
      return deletedState;

    case CLEAR_SHOPPING:
      return initialState;

    default:
      return state;
  }
};

export default foodReducer;
