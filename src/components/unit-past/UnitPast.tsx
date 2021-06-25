import React from 'react';
import './unit-past.scss';
import { getDate } from '../../utils/getDate';
import { IPastData } from '../../types/pastData';
import { useSelector } from 'react-redux';


interface IPastState {
  pastData:IPastData
};

const UnitPast:React.FC = () => {
  
  const data = useSelector((state: IPastState) => state.pastData);

  const hourResult = data.hourly[11]; // 11:00

  const date:string = getDate(data.current.dt);
  const temp:number = Math.round(hourResult.temp);

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
        { temp >= 0 ? `+${temp}` : temp }
        </span>
        <span>°</span>
      </div>
    </div>
  )
}

export default UnitPast;