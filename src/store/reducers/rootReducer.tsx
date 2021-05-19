import { combineReducers } from 'redux';
import appReducer from './app';
import forecastDataReducer from './forecastData';
import pastDataReducer from './pastData';
import pastDateReducer from './pastDate';


const rootReducer = combineReducers({
  app: appReducer,
  forecastData: forecastDataReducer,
  pastData: pastDataReducer,
  pastDate: pastDateReducer 
})

export default rootReducer;