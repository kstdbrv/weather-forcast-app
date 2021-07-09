import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../store/actions';


export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActions, dispatch)
}