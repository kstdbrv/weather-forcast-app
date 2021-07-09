import './select-city-past.scss';
import { CITIES } from '../../cities/cities';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import positionError from '../../utils/positionError';


const SelectCityPast: React.FC = () => {

  const { getLocation } = useActions();
  const cityLocation = useTypedSelector((state) => state.pastCardInfo.cityLocation);

  const geoOptions:PositionOptions = {
    enableHighAccuracy: true, 
    timeout: 1500,
    maximumAge: 0,
  }

  const setCurrentPosition = (position: GeolocationPosition): void => {
    const latitude = position.coords.latitude.toString(); 
    const longitude = position.coords.longitude.toString();
    getLocation(latitude, longitude);
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
        return getLocation(latitude, longitude = '50.100193');
     case '53.507836': // Тольятти
        return getLocation(latitude, longitude = '49.420393');
     case '51.533557': // Саратов
        return getLocation(latitude, longitude = '46.034257');
     case '55.796127': // Казань
        return getLocation(latitude, longitude = '49.106405');
     case '45.035470': // Краснодар
        return getLocation(latitude, longitude = '38.975313');
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