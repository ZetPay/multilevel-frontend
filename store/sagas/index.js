import {all, fork} from 'redux-saga/effects';

import actionWatchAuth from './authSagas';
import actionWatchPayment from './paymentSagas';

export default function* rootSagas() {
  yield all([
    fork(actionWatchAuth),
    fork(actionWatchPayment)
  ]);
}