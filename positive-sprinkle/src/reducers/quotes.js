import {
  GET_QUOTES_PENDING,
  GET_QUOTES_SUCCESS
} from '../actions/quotes'

export default(state = [], action) => {
  switch (action.type) {
    case GET_QUOTES_PENDING:
      return state;
    case GET_QUOTES_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
    }
}
