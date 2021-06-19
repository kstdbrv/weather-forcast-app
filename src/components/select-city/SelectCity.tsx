import './select-city.scss';
import { useDispatch } from 'react-redux';
import { fetch7DayForecast } from '../../store/actions/getWeather';
import { CITIES } from '../../cities/cities';


const SelectCity = ({ forecast7DaysData }) => {

  const dispatch = useDispatch();

  const setCityLocation = e => { 
    let longitude = '';
    let latitude = e.target.value;
    switch (latitude) {
     case '53.195873': // Самара
      return dispatch(fetch7DayForecast(latitude, longitude = '50.100193'));
     case '53.507836': // Тольятти
      return dispatch(fetch7DayForecast(latitude, longitude = '49.420393'));
     case '51.533557': // Саратов
      return dispatch(fetch7DayForecast(latitude, longitude = '46.034257'));
     case '55.796127': // Казань
      return dispatch(fetch7DayForecast(latitude, longitude = '49.106405'));  
     case '45.035470': // Краснодар
      return dispatch(fetch7DayForecast(latitude, longitude = '38.975313'));
     default: return;
    }
  }
  
  let isEmptyForecast = Object.keys(forecast7DaysData);
  const classies = [
    'select-future__city',
    isEmptyForecast.length ? 'select-future__city--active' : null,
  ];

  return (
    <form className="card-forcast__select select-future">
      <select 
        onChange={ setCityLocation }
        className={ classies.join(' ') }
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