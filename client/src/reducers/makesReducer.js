import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function makesReducer(state = initialState.makes, action) {
  if (action.type === types.APOLLO_QUERY_RESULT
    && action.operationName.toLowerCase() === types.operation.getMakes) {
    return Object.assign([], action.result.data.makes);
  }
  return state;
}
