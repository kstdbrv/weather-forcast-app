import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch7DayForecast } from '../../store/actions/getWeather';


const SITIES = [
  { name: 'Select city', lat: '' },
  { name: 'Самара', lat: '53.195873' },
  { name: 'Тольятти', lat: '53.507836' },
  { name: 'Саратов', lat: '51.533557' },
  { name: 'Казань', lat: '55.796127' },
  { name: 'Краснодар', lat: '45.035470' },
]

const SelectCity = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/lib/select.js";
    script.async = true;
  
    document.body.appendChild(script);
  }, []);

  const dispatch = useDispatch();

  const handleChange = e => { 
    let lon;
    let lat = e.target.value;
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

  return (
    <select
     onChange={handleChange}
     className="card-forcast__select"
    >
    {
      SITIES.map(option => (
        <option
          key={option.lat}
          value={option.lat}
        >
          {option.name}
        </option>
      ))  
    }
    </select>
  )
}

export default SelectCity;