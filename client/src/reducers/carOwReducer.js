import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carOwReducer(state = initialState.carOw, action) {
  switch (action.type) {
    case types.LOAD_CAR_OW_SUCCESS:
      return action.review;
    default:
      return state;
  }
}
