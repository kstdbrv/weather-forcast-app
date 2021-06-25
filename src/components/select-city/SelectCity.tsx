import './select-city.scss';
import { useDispatch } from 'react-redux';
import { fetch7DayForecast } from '../../store/actions/getWeather';
import { CITIES } from '../../cities/cities';


type SelectLat = '53.195873' | '53.507836' |
                      '51.533557' | '55.796127' | '45.035470'

const SelectCity = ({ data }) => {

  const dispatch = useDispatch();

  const handleChange = e => { 
    let lon: string = '';
    let lat:SelectLat = e.target.value;
    switch (lat) {
     case '53.195873': // Самара
      return dispatch(fetch7DayForecast(lat, lon = '50.100193'));
     case '53.507836': // Тольятти
      return dispatch(fetch7DayForecast(lat, lon = '49.420393'));
     case '51.533557': // Саратов
      return dispatch(fetch7DayForecast(lat, lon = '46.034257'));
     case '55.796127': // Казань
      return dispatch(fetch7DayForecast(lat, lon = '49.106405'));  
     case '45.035470': // Краснодар
      return dispatch(fetch7DayForecast(lat, lon = '38.975313'));
     default: return;
    }
  }
  
  let isEmpty = Object.keys(data);
  const cls = [
    'select-future__city',
    isEmpty.length ? 'select-future__city--active' : null,
  ];

  return (
    <form className="card-forcast__select select-future">
      <select 
        onChange={ handleChange }
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