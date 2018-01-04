import { FETCH_POST, CREATE_POST, FETCH_ID } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_ID:
      //make a new a key value pair : add it to data
      return {...state, [action.payload.data.id] : action.payload.data};
    default:
      return state;
  }
}
