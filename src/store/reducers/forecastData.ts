import {
  Days7Forecast,
  Days7ForecastAction
} from '../../types/forecastData';


let initialState = {};

const forecastDataReducer = (
  state = initialState, action: Days7ForecastAction) => {
  switch (action.type) {
    case Days7Forecast.FETCH_7DAYSFORECAST:
      return action.data;
    default: return state;
  }
}

export default forecastDataReducer;