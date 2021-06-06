import {  IPastDataAction } from '../../types/pastData';
import { IPastData } from '../../types/pastData';
import { FETCH_PAST_FORECAST } from '../actions/actionTypes';


/* let initialState:IPastData = {
  current: { dt: null },
  hourly: [],
}; */

let initialState = {};

const pastDataReducer = (state = initialState, action:IPastDataAction) => {
  switch (action.type) {
    case FETCH_PAST_FORECAST:
      return action.data;
    default: return state;
  }
}

export default pastDataReducer;