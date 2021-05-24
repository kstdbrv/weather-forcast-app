import React from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTemp  } from '../../utils/utils';
import './unit-forecast.scss';


const UnitForecast = () => {

  interface RootState {
    forecastData: any
  };

  const data = useSelector((state: RootState) => state.forecastData);

  return data.daily.map(day => {

    const date = getDate(day.dt);
    const temp = getTemp(day.temp.eve);
    return (
        <div 
        key={ day.dt }
        className="unit-forecast"
        >
          <p className="unit-forecast__date">
            { date }
          </p>
        {
          day.weather.map(result => {

            let url = 'http://openweathermap.org/img/wn/' + result.icon + '@2x.png';
            return (
              <img
                key={ result.id }
                className="unit-forecast__image"
                src={ url }
                alt={ result.description }
              />
            )
          })
        }
          <div className="unit-forecast__tmp">
            <span className="unit-forecast__num">
              { temp }
            </span>
            <span>°</span>
          </div>
        </div>
    )
  })
}

export default UnitForecast;