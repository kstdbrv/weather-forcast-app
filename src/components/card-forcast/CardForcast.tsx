import React from 'react';
import './card-forcast.scss';
import Placeholder from '../../assets/images/placeholder.svg';
import SelectCity from '../select-city/SelectCity';


const CardForcast: React.FC = () => {
  return (
    <article className="card-forcast">
      <h3 className="card-forcast__title">
        7 Days Forecast
      </h3>
      <SelectCity />
      <img
        className="card-forcast__placeholder"
        src={Placeholder}
        alt="картинка вместо погоды"
      />
      <p className="card-forcast__text">
        Fill in all the fields and
        the weather will be displayed
      </p>
    </article>
  )
}

export default CardForcast;