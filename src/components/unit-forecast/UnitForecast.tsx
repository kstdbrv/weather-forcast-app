import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTemp  } from '../../utils/utils';
import './unit-forecast.scss';
import { IDataInfo } from '../../interfaces';

interface IunitProps {
  data: IDataInfo[]
};

interface IRootState {
  forecastData: {
    daily: IDataInfo[]
  }
};

const UnitForecast: FC<IunitProps> = props => {
  
  let data = useSelector((state: IRootState) => state.forecastData);
  let forecastData;

  if (window.screen.width > 768 && !!props.data.length) {
      
    forecastData = props.data;
  } else if (window.screen.width < 768) {
    
     forecastData = data.daily;
  } else {
    
      const cards = [0, 1, 2];
      forecastData = cards.map(card => {
        return data.daily[card]
      }); 
    };
  
  return forecastData.map(day => {
 
    const date:string = getDate(day.dt);
    const temp:string = getTemp(day.temp.eve);
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