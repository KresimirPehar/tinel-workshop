import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import workshopsReducer from './reducers/workshopsReducer';
import filtersReducer from './reducers/filtersReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  filters: filtersReducer,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
