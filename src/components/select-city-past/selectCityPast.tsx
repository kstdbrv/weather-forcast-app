import React, { useEffect } from 'react';
import './select-city-past.scss';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../store/actions/getLocation';


const CITIES = [
  { name: 'Select city', disabled: true, hidden: true },
  { name: 'Самара', lat: '53.195873' },
  { name: 'Тольятти', lat: '53.507836' },
  { name: 'Саратов', lat: '51.533557' },
  { name: 'Казань', lat: '55.796127' },
  { name: 'Краснодар', lat: '45.035470' },
]

const SelectCityPast = () => {

  const dispatch = useDispatch();

  const handleChange = e => { 
    let lon;
    let lat = e.target.value;
    switch (lat) {
     case '53.195873': // Самара
        return dispatch(getLocation(lat, lon = '50.100193',));
        break;
     case '53.507836': // Тольятти
        return dispatch(getLocation(lat, lon = '49.420393'));
        break;
     case '51.533557': // Саратов
        return dispatch(getLocation(lat, lon = '46.034257'));
        break;
     case '55.796127': // Казань
        return dispatch(getLocation(lat, lon = '49.106405'));
        break;
     case '45.035470': // Краснодар
        return dispatch(getLocation(lat, lon = '38.975313'));
        break;
     default: return;
    }
  }

  return (
      <select
        onChange={handleChange}
        className="input-style select-past__city select-past__city_active"
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