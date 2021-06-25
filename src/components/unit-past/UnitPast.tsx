import React from 'react';
import { useSelector } from 'react-redux';
import './unit-past.scss';
import { getDate, getTemp  } from '../../utils/utils';
import { IPastData } from '../../types/pastData';


interface IPastState {
  pastData:IPastData
};

const UnitPast:React.FC = () => {
  
  const pastDataForecast = useSelector((state: IPastState) => state.pastData);

  const hourResult = pastDataForecast.hourly[11]; // 11:00

  const date:string = getDate(pastDataForecast.current.dt);
  const temp:string = getTemp(hourResult.temp);


  return (
    <div className="card-forcast__unit unit-past">
      <p className="unit-past__date">
        { date }
      </p>
      {
        hourResult.weather.map(result => {

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
}

export default UnitPast;