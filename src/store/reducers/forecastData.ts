import {
  Days7Forecast,
  Days7ForecastAction
} from '../../types/forecastData';


/* type WeatherData = {
  icon: string
  id: number | null
  description: string
}

export type DailyData = {
  dt: number | null
  temp: { eve: number | null }
  weather: WeatherData[]
}

export type ForecastData = {
  daily: DailyData[]
}

const initialState: ForecastData = {
  daily: [
    {
      dt: null,
      temp: { eve: null },
      weather: [{
        icon: '',
        description: '',
        id: null
       } ]
    }
  ]
}; */

const initialState = {};

const forecastDataReducer = (
  state = initialState, action: Days7ForecastAction) => {
  switch (action.type) {
    case Days7Forecast.FETCH_7DAYSFORECAST:
      return { ...state, ...action.data };
    default: return state;
  }
}

export default forecastDataReducer;