import React from 'react';
import { useSelector } from 'react-redux';
import './card-forcast.scss';
import SelectCity from '../select-city/SelectCity';
import Loader from '../loader/Loader';
import UnitForecast from '../unit-forecast/UnitForecast';
import Placeholder from '../placeholder/Placeholder';
import UnitFull from '../unit-full';

const CardForcast: React.FC = () => {
  
  interface IApp {
    app: { loadingForecast: boolean }
  };

  const loading = useSelector((state:IApp) => state.app.loadingForecast);
  const data = useSelector((state:any) => state.forecastData);

  return (
    <article className="card-forcast card-forcast--future">
      <h3 className="card-forcast__title">
        7 Days Forecast
      </h3>
      <SelectCity data={ data } />
      {
        loading ? <Loader /> :
        data.hourly ?
            <div className="card-forcast__wrapper">
              <div className="card-forcast__overflow">
                {/* <UnitForecast /> */}
                <UnitFull />
              </div>
            </div>
            : <Placeholder />
      }
    </article>
  )
}

export default CardForcast;