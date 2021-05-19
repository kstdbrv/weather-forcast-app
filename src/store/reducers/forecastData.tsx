import { FETCH_7DAYSFORECAST } from '../actions/actionTypes';

let initialState = {
  daysForecast: null,
}

const forecastDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_7DAYSFORECAST:
      return action.data;
    default: return state;
  }
}

export default forecastDataReducer;