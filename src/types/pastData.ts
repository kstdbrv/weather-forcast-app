interface IWeather {
  icon: string,
  id: number,
  description: string,
};

interface IHourly {
  temp: number
  weather: IWeather[]
};

export interface IPastData {
  current: { dt: number }
  hourly: IHourly[]
};

export interface IPastDataAction {
  type: string
  data: IPastData
};
