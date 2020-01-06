import { createStore, applyMiddleware } from 'redux';
import isLoggedReducer from './reducers/isLoggedReducer';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(isLoggedReducer, persistedState ,composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
  });

export default store;