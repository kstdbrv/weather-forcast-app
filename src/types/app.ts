
export interface IStateLoading {
  loadingForecast: boolean
  loadingPast: boolean
};

type ShowLoaderForcast = {
  type: LoaderStatus.SHOW_LOADER_FORECAST;
};

type HideLoaderForcast = {
  type: LoaderStatus.HIDE_LOADER_FORECAST;
};

type ShowLoaderPast = {
  type: LoaderStatus.SHOW_LOADER_PAST;
};

type HideLoaderPast = {
  type: LoaderStatus.HIDE_LOADER_PAST;
};

export type AppAction = ShowLoaderForcast | HideLoaderForcast |
                  ShowLoaderPast | HideLoaderPast

export enum LoaderStatus {
  SHOW_LOADER_FORECAST = 'SHOW_LOADER_FORECAST',
  HIDE_LOADER_FORECAST = 'HIDE_LOADER_FORECAST',
  SHOW_LOADER_PAST = 'SHOW_LOADER_PAST',
  HIDE_LOADER_PAST = 'HIDE_LOADER_PAST'
};


