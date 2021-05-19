import React, { useEffect } from 'react';
import './card-forcast.scss';
import Placeholder from '../../assets/images/placeholder.svg';


const SITIES = [
  {},
  {},
  {},
  {},
]

/* gettingData async = () => {
  const api_url = await fetch(`/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}
  `)
}
 */
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