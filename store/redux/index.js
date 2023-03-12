import {combineReducers} from 'redux';

import authReducer from './authReducer';
import paymentReducer from './paymentReducer';
import profileReducer from './profileReducer';
import bonusReducer from './bonusReducer';

const rootReducer = combineReducers({
  authReducer,
  paymentReducer,
  profileReducer,
  bonusReducer
});

export default rootReducer;