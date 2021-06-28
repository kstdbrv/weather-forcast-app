import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './card-forcast.scss';
import SelectCity from '../select-city/SelectCity';
import Loader from '../loader/Loader';
import UnitForecast from '../unit-forecast/UnitForecast';
import Placeholder from '../placeholder/Placeholder';
import { IForecastData } from '../../types/forecastData';
import { IStateLoading } from '../../types/app';


const CardForcast: React.FC = () => {

  interface IApp {
    app: IStateLoading
  };

  const { loading7DaysForecast } = useSelector((state:IApp) => state.app);
  const forecast7DaysData = useSelector((state: any) => state.forecastData);

  const cardsToShow = useRef<number[]>([0, 1, 2]);
  const [currentShowCards, setCurrentShowCards] = useState<IForecastData[]>([]);

  const isInctiveNext:boolean = cardsToShow.current.includes(7);
  const isAIntivePrev:boolean = cardsToShow.current.includes(0);

  const setNextCards = () => {
    if (isInctiveNext) return;
    
    const nextCards = cardsToShow.current.map(card => {
      return card + 1
    });
    cardsToShow.current = nextCards;
    
    const currentShowCards: any = nextCards.map(card => {
      return forecast7DaysData.daily[card]
    });

    setCurrentShowCards(prev => currentShowCards);
  };

  const setPrevCards = () => {
    if (isAIntivePrev) return;
    
    const prevCards = cardsToShow.current.map(card => {
      return card - 1
    });
    cardsToShow.current = prevCards;

    const currentShowCards: any = prevCards.map(card => {
      return forecast7DaysData.daily[card]
    });

    setCurrentShowCards(prev => currentShowCards);
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
      <SelectCity forecast7DaysData={ forecast7DaysData } />
      {
        loading7DaysForecast ? <Loader /> :
        forecast7DaysData.hourly ?
            <div className="card-forcast__wrapper">
              <div className="card-forcast__overflow">
              <UnitForecast currentShowCards={ currentShowCards } />
                <div
                  className={ clsPrev.join(' ').trim() }
                  onClick={ setPrevCards }
                ></div>
                <div
                  className={ clsNext.join(' ').trim() }
                  onClick={ setNextCards }
                ></div>
              </div>
            </div>
            : <Placeholder />
      }
    </article>
  )
}

export default CardForcast;