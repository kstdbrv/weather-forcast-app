export interface ICardInfo {
  pastCardInfo: {
    cityLocation: {
      lat?: string, // необязательно
      readonly lon: string // закрыта для перезаписи
    },
    unixDate: number
  }
};