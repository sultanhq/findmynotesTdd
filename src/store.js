
import { combineReducers, createStore } from 'redux';
import noteApp from './reducers/';

const reducers = combineReducers({
  noteApp,
});

export default createStore(reducers);