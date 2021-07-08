import axios from '../../axios/axios';
import { source } from '../../axios/axios';
import { isCancel } from '../../axios/axios';
import { Days7Forecast, IForecastData } from '../../types/forecastData';
import { IPastData, PastData } from '../../types/pastData';
import {
  hideLoaderPast, showLoaderForcast,
  showLoaderPast, hideLoaderForcast,
} from './app';


type SelectLat = '53.195873' | '53.507836' |
  '51.533557' | '55.796127' | '45.035470';

type SelectLon = '50.100193' | '49.420393' |
  '46.034257' | '49.106405' | '38.975313' | '';

type SityLocation = {
  lat: SelectLat,
  lon: SelectLon
};

type ServerError = {
  code: number;
  message: string;
};
  
const isServerError = (error: any): error is ServerError => {
  if (!error) return false; // null, undefined, ''
  
  const codeIsCorrect = typeof error.code === 'number';
  const messageIsCorrect = typeof error.message === 'string';
  
  return codeIsCorrect && messageIsCorrect;
};

const validateThrown = (something: string | ServerError): void => {
  if (isServerError(something)) {
    console.error(`Error code: ${something.code}, message: ${something.message}`);
  } else {
    console.log('something is not an server error');
  }
};

const API_KEY = process.env.REACT_APP_API_REY;

export function fetch7DayForecast(lat:SelectLat, lon:SelectLon, part:string = '') {

  return async dispatch => {
    try {

      dispatch(showLoaderForcast());

      const url: string =
        `/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=metric&appid=${API_KEY}`;
      const response =
        await axios.get<IForecastData[]>(url, { cancelToken: source.token });

      dispatch({
        type: Days7Forecast.FETCH_7DAYSFORECAST,
        data: response.data
      });

      dispatch(hideLoaderForcast());

    } catch (thrown: any) {
      validateThrown(thrown);
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
    
    let unixDate:number | null = pastCardInfo.unixDate;
    let cityLocation:SityLocation | null = pastCardInfo.cityLocation;

    if (unixDate === null || cityLocation === null) return;
    
    const { lat, lon } = cityLocation;
    
    try {
      dispatch(showLoaderPast());

      const url: string =
        `/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixDate}&units=metric&appid=${API_KEY}`;
      const response = await axios.get<IPastData>(url, { cancelToken: source.token });

      dispatch({
        type: PastData.FETCH_PAST_FORECAST,
        data: response.data
      });

      dispatch(hideLoaderPast());

    } catch (thrown: any) {
      validateThrown(thrown);
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


