import axios from '../../axios/axios';
import { source } from '../../axios/axios';
import { isCancel } from '../../axios/axios';
import {
  FETCH_7DAYSFORECAST, FETCH_PAST_FORECAST
} from './actionTypes';
import {
  hideLoaderPast, showLoaderForcast,
  showLoaderPast, hideLoaderForcast,
} from './app';


const API_KEY = process.env.REACT_APP_API_REY;

export function fetch7DayForecast(lat, lon, part = '') {

  return async dispatch => {
    try {

      dispatch(showLoaderForcast());

      const url = `/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url, { cancelToken: source.token });

      dispatch({
        type: FETCH_7DAYSFORECAST,
        data: response.data
      });

      dispatch(hideLoaderForcast());

    } catch (thrown) {
      if (isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoaderForcast());
      } else {
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoaderForcast());
      }
    }
  }
}

export function fetchPastForecast() {
  
  return async (dispatch, getState) => {

    const { pastCardInfo } = getState();
    
    let unixDate = pastCardInfo.unixDate;
    let cityLocation = pastCardInfo.cityLocation;

    if (unixDate === null || cityLocation === null) return;
    
    const { lat, lon } = cityLocation;
    
    try {
      dispatch(showLoaderPast());

      const url = `/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixDate}&units=metric&appid=${API_KEY}&lang=en`;
      const response = await axios.get(url, { cancelToken: source.token });

      dispatch({
        type: FETCH_PAST_FORECAST,
        data: response.data
      });

      dispatch(hideLoaderPast());

    } catch (thrown) {
      if (isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoaderPast());
      } else {
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoaderPast());
      }
    }
  }
}


