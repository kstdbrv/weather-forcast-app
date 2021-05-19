import {
  SHOW_LOADER, HIDE_LOADER
} from './actionTypes'

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}