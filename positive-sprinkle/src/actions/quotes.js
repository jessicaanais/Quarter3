import axios from 'axios'

export const GET_QUOTES_PENDING = 'GET_QUOTES_PENDING';
export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';


export const getQuotes = () => {
  return async (dispatch) => {
    dispatch({ type: GET_QUOTES_PENDING })
    let quotes = await axios.get('http://localhost:8000/quotes')
    dispatch({
      type: GET_QUOTES_SUCCESS,
      payload: quotes
    })
  }
}


export const ADD_QUOTES_PENDING = 'ADD_QUOTES_PENDING';
export const ADD_QUOTES_SUCCESS = 'ADD_QUOTES_SUCCESS';


export const addQuotes = (newQuote) => {
  return async (dispatch) => {
    dispatch({ type: ADD_QUOTES_PENDING })
    let quotes = await axios.post('http://localhost:8000/quotes', newQuote)
    dispatch({
      type: ADD_QUOTES_SUCCESS,
      payload: quotes
    })
  }
}
