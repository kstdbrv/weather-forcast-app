import { PastCard } from '../../types/pastCard';


export function getDate(unixDate: number) {
  return {
    type: PastCard.GET_DATE,
    unixDate
 }
}