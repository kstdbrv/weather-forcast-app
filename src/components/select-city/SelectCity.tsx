import './select-city.scss';
import { CITIES } from '../../cities/cities';
import { useActions } from '../../hooks/useActions';
import positionError from '../../utils/positionError';


const SelectCity = ({ forecast7DaysData }) => {

  const { fetch7DayForecast } = useActions();

  const geoOptions:PositionOptions = {
    enableHighAccuracy: true, 
    timeout: 1500,
    maximumAge: 0,
  }

  const setCurrentPosition = (position: GeolocationPosition): void => {
    const latitude = position.coords.latitude.toString(); 
    const longitude = position.coords.longitude.toString();
    fetch7DayForecast(latitude, longitude);
  }

  const setCityLocation = e => {
    if (e.target.value === 'current') {
      const handleCurrentLocation = () => {
        if (navigator.geolocation) { 
          navigator.geolocation.getCurrentPosition(
            setCurrentPosition, positionError, geoOptions
          );
        } 
      }
      handleCurrentLocation();
    }
    /* eslint-disable */
    let longitude = '';
    let latitude = e.target.value;
    switch (latitude) {
     case '53.195873': // Самара
      return fetch7DayForecast(latitude, longitude = '50.100193');
     case '53.507836': // Тольятти
      return fetch7DayForecast(latitude, longitude = '49.420393');
     case '51.533557': // Саратов
      return fetch7DayForecast(latitude, longitude = '46.034257');
     case '55.796127': // Казань
      return fetch7DayForecast(latitude, longitude = '49.106405');  
     case '45.035470': // Краснодар
      return fetch7DayForecast(latitude, longitude = '38.975313');
     default: return;
    }
  }
  
  let isEmptyForecast = Object.keys(forecast7DaysData);
  const cls = [
    'select-future__city',
    isEmptyForecast.length ? 'select-future__city--active' : null,
  ];

  return (
    <form className="card-forcast__select select-future">
      <select 
        onChange={ setCityLocation }
        className={ cls.join(' ') }
        defaultValue="Select city"
      >
      {
        CITIES.map(option => (
          <option
            key={ option.name }
            value={ option.lat }
            disabled={ option.disabled }
            hidden={ option.hidden }
          >
            { option.name }
          </option>
        ))  
      }
      </select>
    </form>
  )
}

export default SelectCity;