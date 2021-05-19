import React, { useEffect } from 'react';
import './card-forcast.scss';
import Placeholder from '../../assets/images/placeholder.svg';


const SITIES = [
  { name: 'Самара', lat: '53.195873', lon: '50.100193' },
  { name: 'Тольятти', lat: '53.507836', lon: '49.420393' },
  { name: 'Саратов', lat: '51.533557', lon: '46.034257' },
  { name: 'Краснодар', lat: '(45.035470', lon: '38.975313' },
]

const CardForcast: React.FC = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/lib/select.js";
    script.async = true;
  
    document.body.appendChild(script);
  }, []);

  return (
    <div className="card-forcast">
      <h3 className="card-forcast__title">
        7 Days Forecast
      </h3>
      <select
        data-custom-select-class="select"
        className="card-forcast__select"
      >
        <option value='Select city'>
         Select city
        </option>
        <option>
          test2
        </option>
      </select>
      <img
        className="card-forcast__placeholder"
        src={Placeholder}
        alt="картинка вместо погоды"
      />
      <p className="card-forcast__text">
        Fill in all the fields and
        the weather will be displayed
      </p>
    </div>
  )
}

export default CardForcast;