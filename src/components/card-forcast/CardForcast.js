import React from 'react';
import { useSelector } from 'react-redux';
import './card-forcast.scss';
import Placeholder from '../../assets/images/placeholder.svg';
import SelectCity from '../select-city/SelectCity';
import Loader from '../loader/Loader';


const CardForcast = () => {

  const loading = useSelector(state => state.app.loadingForecast);

  return (
    <article className="card-forcast">
      <h3 className="card-forcast__title">
        7 Days Forecast
      </h3>
      <SelectCity />
      {
        loading ? <Loader /> :
        <React.Fragment>
          <img
           className="card-forcast__placeholder"
           src={Placeholder}
           alt="картинка вместо погоды"
          />
          <p className="card-forcast__text">
            Fill in all the fields and
            the weather will be displayed
          </p>    
        </React.Fragment>
      }
      
    </article>
  )
}

export default CardForcast;