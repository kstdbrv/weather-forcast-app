import { GET_DATE, GET_LOCATION } from '../actions/actionTypes';
import { IPastCardState } from '../../types/pastCard';


interface IpastCardAction {
  type: string,
  unixDate: number,
  cityLocation:string
};

let initialState: IPastCardState = {
  unixDate: null,
  cityLocation: null,
};

const pastCardReducer = (
  state = initialState, action: IpastCardAction
): IPastCardState => {
  switch (action.type) {
    case GET_DATE:
      return { ...state, unixDate: action.unixDate }
    case GET_LOCATION:
      return { ...state, cityLocation: action.cityLocation }
    default: return state;
  }
}

export default pastCardReducer;