export interface ICardInfo {
  pastCardInfo: {
    cityLocation: {
      lat?: string, // необязательно
      readonly lon: string // закрыта для перезаписи
    },
    unixDate: number,
    /* onClick: (id:number) => void, */
  }
};


interface IWeatherInfo {
  icon: string,
  id: number,
  description: string,
};

export interface IDataInfo {
  dt: number,
  temp: { eve: number },
  weather: IWeatherInfo[],
};