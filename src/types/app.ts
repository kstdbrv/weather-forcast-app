// example
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
// example



export interface IStateLoading {
  loading7DaysForecast: boolean
  loadingPastForecast: boolean
};

export interface IAppAction {
  type: string
  loadingForecast: boolean
  loadingPast: boolean
};



