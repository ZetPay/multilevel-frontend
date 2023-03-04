import {all, fork} from 'redux-saga/effects';

import actionWatchAuth from './authSagas';
import actionWatchPayment from './paymentSagas';
import actionWatchProfile from './profileReducer';

export default function* rootSagas() {
  yield all([
    fork(actionWatchAuth),
    fork(actionWatchPayment),
    fork(actionWatchProfile)
  ]);
}