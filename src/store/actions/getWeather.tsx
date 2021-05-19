import axios from '../../axios/axios';
import { source } from '../../axios/axios';
import { isCancel } from '../../axios/axios';
import {
  FETCH_7DAYSFORECAST, FETCH_PAST_FORECAST,
} from './actionTypes';
import {
  hideLoader, showLoader
} from './app';

const API_KEY = process.env.REACT_APP_API_REY;

export function fetch7DayForecast({ lat, lon, part }) {

  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`;
      const response = await axios.get(url, { cancelToken: source.token });

      dispatch({
        type: FETCH_7DAYSFORECAST,
        data: response.data
      });

      dispatch(hideLoader());

    } catch (thrown) {
      if (isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      } else {
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      }
    }
  }
}

export function fetchPastForecast({ lat, lon, part }) {

  return async dispatch => {
    try {
      dispatch(showLoader());

      const url = `/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`;
      const response = await axios.get(url, { cancelToken: source.token });

      dispatch({
        type: FETCH_PAST_FORECAST,
        data: response.data
      });

      dispatch(hideLoader());

    } catch (thrown) {
      if (isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      } else {
        /* dispatch(showAlert('Что-то пошло не так...', 'danger')) */
        dispatch(hideLoader());
      }
    }
  }
}

