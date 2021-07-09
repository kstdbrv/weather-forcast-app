import { PastDataAction, PastData } from '../../types/pastData';

/* let initialState = {
  current: { dt: null },
  hourly: [
    {
      temp: null,
      weather: []
   }
  ],
}; */

let initialState = {};

const pastDataReducer = (
  state = initialState, action: PastDataAction) => {
  switch (action.type) {
    case PastData.FETCH_PAST_FORECAST:
      return action.data;
    default: return state;
  }
}

export default pastDataReducer;