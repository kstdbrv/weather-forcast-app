import { GET_LOCATION } from './actionTypes';
import { fetchPastForecast } from './getWeather';

export function getLocation(lat, lon) {

  return dispatch => {
    dispatch({
      type: GET_LOCATION,
      cityLocation: { lat, lon }
    });
    dispatch(fetchPastForecast());
 }
}