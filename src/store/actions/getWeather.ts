import axios from '../../axios/axios';
import { source } from '../../axios/axios';
import { isCancel } from '../../axios/axios';
import { Days7Forecast, IForecastData } from '../../types/forecastData';
import { IPastData, PastData } from '../../types/pastData';
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
      const response = await axios.get<IForecastData[]>(url, { cancelToken: source.token });

      dispatch({
        type: Days7Forecast.FETCH_7DAYSFORECAST,
        data: response.data
      });

      dispatch(hideLoaderForcast());

    } catch (thrown:any) {
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
};

export function fetchPastForecast() {
  /* return async (dispatch: Dispatch<IPastDataAction>, getState) => { */
  return async (dispatch, getState) => {

    const { pastCardInfo } = getState();
    
    let unixDate = pastCardInfo.unixDate;
    let cityLocation = pastCardInfo.cityLocation;

    if (unixDate === null || cityLocation === null) return;
    
    const { lat, lon } = cityLocation;
    
    try {
      dispatch(showLoaderPast());

      const url = `/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixDate}&units=metric&appid=${API_KEY}`;
      const response = await axios.get<IPastData>(url, { cancelToken: source.token });

      dispatch({
        type: PastData.FETCH_PAST_FORECAST,
        data: response.data
      });

      dispatch(hideLoaderPast());

    } catch (thrown:any) {
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
};


