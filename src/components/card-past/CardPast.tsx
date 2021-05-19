import React from 'react';
import Placeholder from '../../assets/images/placeholder.svg';
import SelectCity from '../select-city/SelectCity';
import SelectDate from '../select-date/SelectDate';


const CardPast: React.FC = () => {
  return (
    <article className="card-forcast">
      <h3 className="card-forcast__title">
        Forecast for a Date in the Past
      </h3>
      <SelectCity />
      <SelectDate />
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

export default CardPast;