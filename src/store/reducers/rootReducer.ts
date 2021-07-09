import { combineReducers } from 'redux';
import appReducer from './app';
import forecastDataReducer from './forecastData';
import pastDataReducer from './pastData';
import pastCardReducer from './pastCard';


const rootReducer = combineReducers({
  app: appReducer,
  forecastData: forecastDataReducer,
  pastData: pastDataReducer,
  pastCardInfo: pastCardReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>