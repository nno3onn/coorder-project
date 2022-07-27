import dataConfigs from 'configs/data';

// Action Types
export const SHOW_PLACE = 'SHOW_PLACE';
export const UPDATE_PLACE = 'UPDATE_PLACE';

// Action Creators
export const showPlaceAction = () => ({ type: SHOW_PLACE });
export const updatPlaceAction = (selectedPlace) => ({
  type: UPDATE_PLACE,
  selectedPlace,
});

// Initial State
const initialState = dataConfigs.places[0];

// Reducer
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PLACE:
      return state;

    case UPDATE_PLACE:
      return action.selectedPlace;

    default:
      return state;
  }
};

export default placeReducer;
