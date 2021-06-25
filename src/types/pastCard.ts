export interface IPastCardState {
  unixDate: null | number,
  cityLocation: null | string,
};

export enum PastCard {
  GET_DATE = 'GET_DATE',
  GET_LOCATION = 'GET_LOCATION'
};

export type PastCardAction = {
  type: string,
  unixDate: number,
  cityLocation:string
};