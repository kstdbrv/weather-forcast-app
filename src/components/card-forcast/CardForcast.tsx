import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './card-forcast.scss';
import SelectCity from '../select-city/SelectCity';
import Loader from '../loader/Loader';
import UnitForecast from '../unit-forecast/UnitForecast';
import Placeholder from '../placeholder/Placeholder';


const CardForcast: React.FC = () => {

  interface IApp {
    app: { loadingForecast: boolean }
  };

  const loading = useSelector((state:IApp) => state.app.loadingForecast);
  const data = useSelector((state: any) => state.forecastData);

  const cardsToShow = useRef([0, 1, 2]);
  const [result, setResult] = useState([]);
  console.log(result)
  
  const handleNext = () => {
    
    const nextCards = cardsToShow.current.map(card => {
      return card + 1
    });
console.log('nextCards', nextCards)
    const result: any = nextCards.map(card => {
      return data.daily[card]
    });

    setResult(result);
  };

  const handlePrev = () => {
    
    const prevCards = cardsToShow.current.map(card => {
      return card - 1
    });

    const result: any = prevCards.map(card => {
      return data.daily[card]
    });

    setResult(result);
  };


  
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
                <UnitForecast data={ result } />
                <div
                  className="arrow arrow-prev"
                  onClick={ handlePrev }
                ></div>
                <div
                  className="arrow arrow-next"
                  onClick={ handleNext }
                ></div>
              </div>
            </div>
            : <Placeholder />
      }
    </article>
  )
}

export default CardForcast;