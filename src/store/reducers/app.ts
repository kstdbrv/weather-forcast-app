import { IStateLoading, IAppAction } from '../../types/app';
import {
  SHOW_LOADER_FORECAST, HIDE_LOADER_PAST,
  HIDE_LOADER_FORECAST, SHOW_LOADER_PAST,
} from '../actions/actionTypes';


let initialState:IStateLoading = {
  loading7DaysForecast: false,
  loadingPastForecast: false,
}

const appReducer = (
  state = initialState, action: IAppAction
): IStateLoading => {
  switch (action.type) {
    case SHOW_LOADER_FORECAST:
      return { ...state, loading7DaysForecast: true }
    case HIDE_LOADER_FORECAST:
      return { ...state, loading7DaysForecast: false }
    case SHOW_LOADER_PAST:
      return { ...state, loadingPastForecast: true }
    case HIDE_LOADER_PAST:
      return { ...state, loadingPastForecast: false }
    default: return state
  }
}

export default appReducer;