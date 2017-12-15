import quotes from './quotes';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  quotes,
  form: formReducer
});
export default rootReducer;
