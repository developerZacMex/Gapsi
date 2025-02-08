import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Importación nombrada
import providerReducer from './reducers/providerReducer';

const rootReducer = combineReducers({
  providers: providerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;