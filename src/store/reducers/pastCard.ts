import {
  IPastCardState,
  PastCard,
  PastCardAction
} from '../../types/pastCard';


let initialState: IPastCardState = {
  unixDate: null,
  cityLocation: null,
};

const pastCardReducer = (
  state = initialState, action: PastCardAction
): IPastCardState => {
  switch (action.type) {
    case PastCard.GET_DATE:
      return { ...state, unixDate: action.unixDate }
    case PastCard.GET_LOCATION:
      return { ...state, cityLocation: action.cityLocation }
    default: return state;
  }
}

export default pastCardReducer;