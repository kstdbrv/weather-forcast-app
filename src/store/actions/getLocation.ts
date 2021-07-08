import { PastCard } from '../../types/pastCard';
import { fetchPastForecast } from './getWeather';


export function getLocation(lat: string, lon: string) {

  return dispatch => {
    dispatch({
      type: PastCard.GET_LOCATION,
      cityLocation: { lat, lon }
    });
    dispatch(fetchPastForecast());
 }
}