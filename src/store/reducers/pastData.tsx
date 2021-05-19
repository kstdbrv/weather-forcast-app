import { FETCH_PAST_FORECAST } from '../actions/actionTypes';

let initialState = {
  pastForecast: null,
}

const pastDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAST_FORECAST:
      return action.data;
    default: return state;
  }
}

export default pastDataReducer;