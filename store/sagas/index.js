import {all, fork} from 'redux-saga/effects';

import actionWatchAuth from './authSagas';

export default function* rootSagas() {
  yield all([
    fork(actionWatchAuth)
  ]);
}