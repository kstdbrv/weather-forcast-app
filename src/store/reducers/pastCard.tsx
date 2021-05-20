import { GET_DATE, GET_LOCATION } from '../actions/actionTypes';

let initialState = {
  unixDate: null,
  cityLocation: null,
}

const pastCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE:
      return { ...state, unixDate: action.unixDate }
    case GET_LOCATION:
      return { ...state, cityLocation: action.cityLocation }
    default: return state;
  }
}

export default pastCardReducer;