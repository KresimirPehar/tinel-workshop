import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import workshopsReducer from './reducers/workshopsReducer';
import filtersReducer from './reducers/filtersReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  workshops: workshopsReducer,
  filters: filtersReducer,
  users: usersReducer,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
