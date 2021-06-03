import { combineReducers } from 'redux';
import appReducer from './app';
import forecastDataReducer from './forecastData';
import pastDataReducer from './pastData';
import pastCardReducer from './pastCard';
import clickReducer from './handleClick';


const rootReducer = combineReducers({
  app: appReducer,
  forecastData: forecastDataReducer,
  pastData: pastDataReducer,
  pastCardInfo: pastCardReducer,
  cardsToShow: clickReducer
})

export default rootReducer;