import {
  GET_QUOTES_PENDING,
  GET_QUOTES_SUCCESS,
  ADD_QUOTES_PENDING,
  ADD_QUOTES_SUCCESS,
  REMOVE_QUOTE_PENDING,
  REMOVE_QUOTE_SUCCESS,
  EDIT_QUOTE_PENDING,
  EDIT_QUOTE_SUCCESS
} from '../actions/quotes'

export default(state = [], action) => {
  switch (action.type) {
    case GET_QUOTES_PENDING:
      return state;
    case GET_QUOTES_SUCCESS:
      return [...action.payload.data];
    case ADD_QUOTES_PENDING:
      return state;
    case ADD_QUOTES_SUCCESS:
      return [...action.payload.data];
    case REMOVE_QUOTE_PENDING:
      return state;
    case REMOVE_QUOTE_SUCCESS:
      return [...action.payload.data];
    case EDIT_QUOTE_PENDING:
      return state;
    case EDIT_QUOTE_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
    }
}
