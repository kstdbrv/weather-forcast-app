import React from 'react';
import { useSelector } from 'react-redux';
import './unit-past.scss';


const UnitPast = () => {
  
  const data = useSelector(state => state.pastData);

  const unixTimestamp = data.current.dt;
  const date = new Date(unixTimestamp * 1000);

  const dd = date.getDate();
  const yyyy = date.getFullYear();

  if (dd < 10) { dd = '0' + dd };

  function toStrMonth() {
    let mm = date.getMonth() + 1;
    switch (mm) {
      case 1: return 'jan';
      case 2: return 'feb';
      case 3: return 'mar';
      case 4: return 'apr';
      case 5: return 'may';
      case 6: return 'jun';
      case 7: return 'jul';
      case 8: return 'aug';
      case 9: return 'sep';
      case 10: return 'oct';
      case 11: return 'nov';
      case 12: return 'dec';
      default: return;
   }
  }

  const mm = toStrMonth();
  const currentDate = dd + ' ' + mm + ' ' + yyyy;

/*   const hourResult = data.hourly.find(({ dt }) =>
    dt === 1621508400
  ); */ 
  const hourResult = data.hourly[11]; // 11:00
  const currentTemp = Math.round(hourResult.temp);

  function hasPlus() {
    if(currentTemp >= 0){ return true }
  }

  return (
    <div className="card-forcast__unit unit-past">
      <p className="unit-past__date">
        { currentDate }
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
        {
          hasPlus() ? <span>+</span> : null
        }
        <span className="unit-past__num">
          {currentTemp}
        </span>
        <span>°</span>
      </div>
    </div>
  )
}

export default UnitPast;