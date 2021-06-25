import './select-city-past.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../store/actions/getLocation';
import { CITIES } from '../../cities/cities';
import { ICardInfo } from '../../types/app';


const SelectCityPast:React.FC = () => {

  const dispatch = useDispatch();
  const cityLocation = useSelector((state:ICardInfo) => state.pastCardInfo.cityLocation);

  const setCityLocation = e => { 
    let longitude = '';
    let latitude = e.target.value;
    switch (latitude) {
     case '53.195873': // Самара
        return dispatch(getLocation(latitude, longitude = '50.100193',));
     case '53.507836': // Тольятти
        return dispatch(getLocation(latitude, longitude = '49.420393'));
     case '51.533557': // Саратов
        return dispatch(getLocation(latitude, longitude = '46.034257'));
     case '55.796127': // Казань
        return dispatch(getLocation(latitude, longitude = '49.106405'));
     case '45.035470': // Краснодар
        return dispatch(getLocation(latitude, longitude = '38.975313'));
     default: return;
    }
  }

  const classies = [
    'select-past__city',
    cityLocation === null ? null : 'select-past__city--active',
  ];

  return (
      <select
        onChange={ setCityLocation }
        className={ classies.join(' ').trim() }
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