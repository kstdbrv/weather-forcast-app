interface IWeatherData {
  icon: string
  id: number
  description: string
};

export interface IForecastData {
  dt: number
  temp: { eve: number }
  weather: IWeatherData[]
};

export enum Days7Forecast {
  FETCH_7DAYSFORECAST = 'FETCH_7DAYSFORECAST'
};

export type Days7ForecastAction = {
  type: Days7Forecast.FETCH_7DAYSFORECAST,
  data: IForecastData
}




