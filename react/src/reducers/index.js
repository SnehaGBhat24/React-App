/* Use combine Reducers when there are more than 2 reducers , 
so that state value having reducerName as key can be avoided (when there is a single reducer.) */

import { combineReducers } from 'redux';
import isLoggedReducer from './isLoggedReducer';

const allReducers = combineReducers({
    isLoggedReducer,
  });

  export default allReducers;