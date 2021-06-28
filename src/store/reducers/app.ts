import {
  IStateLoading,
  LoaderStatus, AppAction
} from '../../types/app';


let initialState:IStateLoading = {
  loading7DaysForecast: false,
  loadingPastForecast: false,
}

const appReducer = (
  state = initialState, action: AppAction
): IStateLoading => {
  switch (action.type) {
    case LoaderStatus.SHOW_LOADER_FORECAST:
      return { ...state, loading7DaysForecast: true }
    case LoaderStatus.HIDE_LOADER_FORECAST:
      return { ...state, loading7DaysForecast: false }
    case LoaderStatus.SHOW_LOADER_PAST:
      return { ...state, loadingPastForecast: true }
    case LoaderStatus.HIDE_LOADER_PAST:
      return { ...state, loadingPastForecast: false }
    default: return state
  }
}

export default appReducer;