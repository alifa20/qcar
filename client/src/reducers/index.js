import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../apolloClient';
import carOw from './carOwReducer';
import makes from './makesReducer';
import models from './modelsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  apollo: client.reducer(),
  carOw,
  makes,
  models
});

export default rootReducer;
