import { combineReducers } from 'redux';
import testReducer from './testReducer.js';

const appReducers = combineReducers({
  testReducer,
});

export default appReducers;
