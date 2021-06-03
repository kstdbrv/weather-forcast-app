import { HANDLE_PREV, HANDLE_NEXT } from '../actions/actionTypes';

const initialState:number[] = [0, 1, 2];

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_PREV:
      return action.cards
    case HANDLE_NEXT:
      return action.cards
    default: return state
  }
}

export default clickReducer;