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

export type PastDataAction = {
  type: PastData.FETCH_PAST_FORECAST;
  data: IPastData;
};

export enum PastData {
  FETCH_PAST_FORECAST = 'FETCH_PAST_FORECAST'
};
