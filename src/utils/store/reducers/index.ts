import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';

// I added **combineReducer** to make easier to add another reducer in the future

const reducers = combineReducers({
  currency: currencyReducer
});

export default reducers;
