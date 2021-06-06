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