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

  const isInctiveNext = cardsToShow.current.includes(7);
  const isAIntivePrev = cardsToShow.current.includes(0);

  const handleNext = () => {
    if (isInctiveNext) return;
    
    const nextCards = cardsToShow.current.map(card => {
      return card + 1
    });
    cardsToShow.current = nextCards;

    console.log('nextCards', nextCards)
    
    const result: any = nextCards.map(card => {
      return data.daily[card]
    });

    setResult(prev => result);
  };

  const handlePrev = () => {
    if (isAIntivePrev) return;
    
    const prevCards = cardsToShow.current.map(card => {
      return card - 1
    });
    cardsToShow.current = prevCards;

    const result: any = prevCards.map(card => {
      return data.daily[card]
    });

    setResult(prev => result);
  };

  const clsPrev = [
    'arrow arrow-prev',
    isAIntivePrev ? 'arrow--disabled' : '',
  ];

  const clsNext = [
    'arrow arrow-next',
    isInctiveNext ? 'arrow--disabled' : '',
  ];
  
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
                  className={ clsPrev.join(' ').trim() }
                  onClick={ handlePrev }
                ></div>
                <div
                  className={ clsNext.join(' ').trim() }
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