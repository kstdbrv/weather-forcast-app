import { combineReducers } from 'redux';
import appReducer from './app';
import forecastDataReducer from './forecastData';
import pastDataReducer from './pastData';


const rootReducer = combineReducers({
  app: appReducer,
  forecastData: forecastDataReducer,
  pastData: pastDataReducer, 
})

export default rootReducer;