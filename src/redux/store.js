import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import workshopReducer from './reducers/workshopReducer';
import filtersReducer from './reducers/filtersReducer';

const rootReducer = combineReducers({
  workshops: workshopReducer,
  filters: filtersReducer,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
