import './select-city-past.scss';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../store/actions/getLocation';
import { CITIES } from '../../cities/cities';
import { useTypedSelector } from '../../hooks/useTypedSelector';


type SelectLat = '53.195873' | '53.507836' |
  '51.533557' | '55.796127' | '45.035470';
                      
type SelectLon = '50.100193' | '49.420393' |
  '46.034257' | '49.106405' | '38.975313' | '';

const SelectCityPast:React.FC = () => {

  const dispatch = useDispatch();
  const cityLocation = useTypedSelector((state) => state.pastCardInfo.cityLocation);

  const setCityLocation = e => {
    /* eslint-disable */
    let longitude: SelectLon = '';
    let latitude: SelectLat = e.target.value;
    switch (latitude) {
     case '53.195873': // Самара
        return dispatch(getLocation(latitude, longitude = '50.100193'));
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

  const cls = [
    'select-past__city',
    cityLocation === null ? null : 'select-past__city--active',
  ];

  return (
      <select
        onChange={ setCityLocation }
        className={ cls.join(' ').trim() }
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