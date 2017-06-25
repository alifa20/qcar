import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function carDetailsList(state = initialState.carDetailsList, action) {

  if (action.type === types.APOLLO_QUERY_RESULT
    && action.operationName.toLowerCase() === types.operation.getModel) {
    return [
      ...state,
      action.result.data.model,
    ];
    // return Object.assign([], action.result.data.model);

  }
  return state;
}
