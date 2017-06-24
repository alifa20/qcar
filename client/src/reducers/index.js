import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import client from '../apolloClient';
import counter from './counter'
import carOw from './carOwReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  apollo: client.reducer(),
  counter,
  carOw
});

export default rootReducer;
