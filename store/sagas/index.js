import {all, fork} from 'redux-saga/effects';

import actionWatchAuth from './authSagas';
import actionWatchPayment from './paymentSagas';
import actionWatchProfile from './profileSagas';
import actionWatchBonus from './bonusSagas';

export default function* rootSagas() {
  yield all([
    fork(actionWatchAuth),
    fork(actionWatchPayment),
    fork(actionWatchProfile),
    fork(actionWatchBonus),
  ]);
}