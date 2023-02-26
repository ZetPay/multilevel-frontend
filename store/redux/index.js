import {combineReducers} from 'redux';

import authReducer from './authReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
  authReducer,
  paymentReducer
});

export default rootReducer;