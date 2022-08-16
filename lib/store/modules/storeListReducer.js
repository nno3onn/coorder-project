// Action Types
export const SHOW_STORELIST = 'SHOW_STORELIST';
export const UPDATE_STORELIST = 'UPDATE_STORELIST';

export const showAction = () => ({ type: SHOW_STORELIST });
export const updateAction = (data) => ({ type: UPDATE_STORELIST, data });

// Initial State
const initialState = [];

// Reducer
const storeListReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case SHOW_STORELIST:
      return state;

    case UPDATE_STORELIST:
      return data;

    default:
      return state;
  }
};

export default storeListReducer;
