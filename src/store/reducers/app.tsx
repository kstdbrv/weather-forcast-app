import {
  SHOW_LOADER_FORECAST, HIDE_LOADER_PAST,
  HIDE_LOADER_FORECAST, SHOW_LOADER_PAST,
} from '../actions/actionTypes';

let initialState = {
  loadingForecast: false,
  loadingPast: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_FORECAST:
      return { ...state, loadingForecast: true }
    case HIDE_LOADER_FORECAST:
      return { ...state, loadingForecast: false }
    case SHOW_LOADER_PAST:
      return { ...state, loadingPast: true }
    case HIDE_LOADER_PAST:
      return { ...state, loadingPast: false }
    default: return state
  }
}

export default appReducer;