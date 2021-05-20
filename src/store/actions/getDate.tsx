import { GET_DATE } from './actionTypes';

export function getDate(unixDate) {
  return {
    type: GET_DATE,
    unixDate
 }
}