import React from 'react';
import Placeholder from '../../assets/images/placeholder.svg';


const CardPast: React.FC = () => {
  return (
    <div className="card-forcast">
      <h3 className="card-forcast__title">
       Forecast for a Date in the Past
      </h3>
      <select className="card-forcast__select">
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

export default CardPast;