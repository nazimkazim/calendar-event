import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { AppDispatch } from '../store/index';
import { allActionCreators } from '../store/reducers/action-creators';
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch)
}