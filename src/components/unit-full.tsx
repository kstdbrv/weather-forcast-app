import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTemp  } from '../utils/utils';

const UnitFull = () => {

  const data = useSelector((state: any) => state.forecastData);

  const [state, setstate] = useState<number[]>([]);

  console.log(data.daily)
  const cardsToShow: number[] = [0, 1, 2];

  const nextCards = cardsToShow.map(card => {
    return card + 1
  })
  console.log(nextCards)

  const prevCards = cardsToShow.map(card => {
    return card - 1
  })
  console.log(prevCards)

  const result = cardsToShow.map(card => {
    return data.daily[card]
  })
  console.log(result)
  
  return result.map(day => {

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

export default UnitFull;