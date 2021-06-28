import { FC } from 'react';
import { getDate } from '../../utils/getDate';
import './unit-forecast.scss';
import { IForecastData } from '../../types/forecastData';
import { useSelector } from 'react-redux';


interface IunitProps {
  currentShowCards: IForecastData[]
};

interface IRootState {
  forecastData: {
    daily: IForecastData[]
  }
};

const UnitForecast: FC<IunitProps> = props => {
  
  let forecastData = useSelector((state: IRootState) => state.forecastData);
  let forecastDataToShow;

  if (window.screen.width > 768 && !!props.currentShowCards.length) {
      
    forecastDataToShow = props.currentShowCards;
  } else if (window.screen.width < 768) {
    
    forecastDataToShow = forecastData.daily;  
  } else {
    
      const cards:number[] = [0, 1, 2];
      forecastDataToShow = cards.map(card => {
        return forecastData.daily[card]
      }); 
    };
  
    return forecastDataToShow.map(day => {
 
    const date:string = getDate(day.dt);
    const temp:number = Math.round(day.temp.eve);
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
              { temp >= 0 ? `+${temp}` : temp }
            </span>
            <span>°</span>
          </div>
        </div>
    )
  })
}

export default UnitForecast;