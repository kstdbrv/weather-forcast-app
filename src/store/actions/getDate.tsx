import { GET_DATE } from './actionTypes';

export function getDate(date) {
  return {
    type: GET_DATE,
    date
 }
}