import {
  IStateLoading,
  LoaderStatus, AppAction
} from '../../types/app';


let initialState:IStateLoading = {
  loadingForecast: false,
  loadingPast: false,
}

const appReducer = (
  state = initialState, action: AppAction
): IStateLoading => {
  switch (action.type) {
    case LoaderStatus.SHOW_LOADER_FORECAST:
      return { ...state, loadingForecast: true }
    case LoaderStatus.HIDE_LOADER_FORECAST:
      return { ...state, loadingForecast: false }
    case LoaderStatus.SHOW_LOADER_PAST:
      return { ...state, loadingPast: true }
    case LoaderStatus.HIDE_LOADER_PAST:
      return { ...state, loadingPast: false }
    default: return state
  }
}

export default appReducer;