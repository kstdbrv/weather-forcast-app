import React from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTemp  } from '../../utils/utils';

const UnitForecast = () => {

  const data = useSelector(state => state.forecastData);

  return data.daily.map(day => {

    const date = getDate(day.dt);
    const temp = getTemp(day.temp.eve);
    return (
        <div 
        key={ day.dt }
        className="card-forcast__unit unit-past"
        >
          <p className="unit-past__date">
            { date }
          </p>
        {
          day.weather.map(result => {

            let url = 'http://openweathermap.org/img/wn/' + result.icon + '@2x.png';
            return (
              <img
                key={ result.id }
                className="unit-past__image"
                src={ url }
                alt={ result.description }
              />
            )
          })
        }
          <div className="unit-past__tmp">
            <span className="unit-past__num">
              { temp }
            </span>
            <span>°</span>
          </div>
        </div>
    )
  })
}

export default UnitForecast;