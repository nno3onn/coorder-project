// Action Types
export const SHOW_OPTIONS = 'SHOW_OPTIONS';
export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';
export const DELETE_OPTIONS = 'DELETE_OPTIONS';
export const CLEAR_OPTIONS = 'CLEAR_OPTIONS';

export const showAction = (storeCode) => ({ type: SHOW_OPTIONS, storeCode });
export const updateAction = ({ name, cost, cnt, optionIndex }) => ({
  type: UPDATE_OPTIONS,
  name,
  cost,
  cnt,
  optionIndex,
});
export const deleteAction = ({ name }) => ({ type: DELETE_OPTIONS, name });
export const clearAction = () => ({ type: CLEAR_OPTIONS });

// Initial State
const initialState = {};

// Reducer
const optionReducer = (state = initialState, action) => {
  const { type, name, cost, cnt, optionIndex } = action;

  switch (type) {
    case SHOW_OPTIONS:
      return state;

    case UPDATE_OPTIONS:
      const newState = { ...state };
      if (cnt === 0) {
        Object.entries(newState).forEach(([k, v]) => {
          if (optionIndex === v.optionIndex && v.cnt === 0) {
            delete newState[k];
          }
        });
      }
      newState[name] = { cost, cnt, optionIndex };
      return newState;

    case DELETE_OPTIONS:
      const deletedState = { ...state };
      delete deletedState[name];
      return deletedState;

    case CLEAR_OPTIONS:
      return initialState;

    default:
      return state;
  }
};

export default optionReducer;
