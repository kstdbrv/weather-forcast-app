import { GET_DATE } from '../actions/actionTypes';

let initialState = {
  date: null,
}

const pastDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE:
      return action.data;
    default: return state;
  }
}

export default pastDateReducer;