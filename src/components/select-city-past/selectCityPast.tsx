import './select-city-past.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../store/actions/getLocation';
import { CITIES } from '../../cities/cities';
import { ICardInfo } from '../../interfaces';


const SelectCityPast:React.FC = () => {

  const dispatch = useDispatch();
  const data = useSelector((state:ICardInfo) => state.pastCardInfo.cityLocation);

  const handleChange = e => { 
    let lon;
    let lat = e.target.value;
    switch (lat) {
     case '53.195873': // Самара
        return dispatch(getLocation(lat, lon = '50.100193',));
     case '53.507836': // Тольятти
        return dispatch(getLocation(lat, lon = '49.420393'));
     case '51.533557': // Саратов
        return dispatch(getLocation(lat, lon = '46.034257'));
     case '55.796127': // Казань
        return dispatch(getLocation(lat, lon = '49.106405'));
     case '45.035470': // Краснодар
        return dispatch(getLocation(lat, lon = '38.975313'));
     default: return;
    }
  }

  const cls = [
    'select-past__city',
    data === null ? null : 'select-past__city--active',
  ];

  return (
      <select
        onChange={ handleChange }
        className={ cls.join(' ') }
        defaultValue="Select city"
      >
      {
        CITIES.map(option => (
          <option
            key={option.name}
            value={option.lat}
            disabled={option.disabled}
            hidden={option.hidden}
          >
            {option.name}
          </option>
        ))  
      }
      </select>
  )
}

export default SelectCityPast;