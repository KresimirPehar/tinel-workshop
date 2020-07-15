import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import workshopReducer from './reducers/workshopReducer';

const rootReducer = combineReducers({ workshop: workshopReducer });

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
