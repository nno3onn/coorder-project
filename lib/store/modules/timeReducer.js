import dataConfigs from 'configs/data';

// Action Types
export const SHOW_TIME = 'SHOW_TIME';
export const UPDATE_TIME = 'UPDATE_TIME';

// Action Creators
export const showTimeAction = () => ({ type: SHOW_TIME });
export const updateTimeAction = (selectedTime) => ({
  type: UPDATE_TIME,
  selectedTime,
});

// Initial State
const initialState = dataConfigs.times[0];

// Reducer
const timeReducer = (state = initialState, action) => {
  const { type, selectedTime } = action;

  switch (type) {
    case SHOW_TIME:
      return state;

    case UPDATE_TIME:
      return selectedTime;

    default:
      return state;
  }
};

export default timeReducer;
