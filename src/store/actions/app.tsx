import {
  SHOW_LOADER_FORECAST, HIDE_LOADER_PAST,
  HIDE_LOADER_FORECAST, SHOW_LOADER_PAST,
} from './actionTypes';

export function showLoaderForcast() {
  return {
    type: SHOW_LOADER_FORECAST
  }
}

export function hideLoaderForcast() {
  return {
    type: HIDE_LOADER_FORECAST
  }
}

export function showLoaderPast() {
  return {
    type: SHOW_LOADER_PAST
  }
}

export function hideLoaderPast() {
  return {
    type: HIDE_LOADER_PAST
  }
}