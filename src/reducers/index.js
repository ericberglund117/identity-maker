import { combineReducers } from 'redux';
import { isLoading, hasErrored, countries } from './setCountriesReducer';
import { addID } from './AddIDReducer.js';

const rootReducer = combineReducers({
  countries,
  identities: addID,
  isLoading,
  error: hasErrored
});


export default rootReducer;
