import React from 'react';
import { useSelector } from 'react-redux';
import './card-forcast.scss';
import SelectCity from '../select-city/SelectCity';
import Loader from '../loader/Loader';
import UnitForecast from '../unit-forecast/unit-forecast';
import Placeholder from '../placeholder/Placeholder';


const CardForcast = () => {

  const loading = useSelector(state => state.app.loadingForecast);
  const data = useSelector(state => state.forecastData);

  return (
    <article className="card-forcast card-forcast--future">
      <h3 className="card-forcast__title">
        7 Days Forecast
      </h3>
      <SelectCity data={ data } />
      {
        loading ? <Loader /> :
        Object.keys(data).length ?
            <div className="card-forcast__wrapper">
              <div className="card-forcast__overflow">
                <UnitForecast />
              </div>
            </div>
            : <Placeholder />
      }
    </article>
  )
}

export default CardForcast;