/* Use combine Reducers when there are more than 2 reducers , 
so that state value haib=ving reducerName as key can be avoided. */

import { combineReducers } from 'redux';
import isLoggedReducer from './isLoggedReducer';

const allReducers = combineReducers({
    isLoggedReducer,
  });

  export default allReducers;