import { LoaderStatus } from '../../types/app';


export function showLoaderForcast() {
  return {
    type: LoaderStatus.SHOW_LOADER_FORECAST
  }
}

export function hideLoaderForcast() {
  return {
    type: LoaderStatus.HIDE_LOADER_FORECAST
  }
}

export function showLoaderPast() {
  return {
    type: LoaderStatus.SHOW_LOADER_PAST
  }
}

export function hideLoaderPast() {
  return {
    type: LoaderStatus.HIDE_LOADER_PAST
  }
}