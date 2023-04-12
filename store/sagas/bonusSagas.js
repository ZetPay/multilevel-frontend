import {call, put, takeLatest, all } from 'redux-saga/effects';
import { api, URL } from "services/api";
import { Types } from "store/actionTypes";
import { BonusActions } from 'store/redux/bonusReducer';


function* doGetBonusLevel() {
    try {
      const { data } = yield call(api.get, URL.BONUS_LEVEL );
    
      yield put(BonusActions.doGetBonusLevelSuccess(data?.data));
    } catch (error) {
      yield put(BonusActions.doGetBonusLevelFailure(error.message));
    }
}

function* doGetBonusSponsor() {
  try {
    const { data } = yield call(api.get, URL.BONUS_SPONSOR);
  
    yield put(BonusActions.doGetBonusSponsorSuccess(data?.data));
  } catch (error) {
    yield put(BonusActions.doGetBonusSponsorFailure(error.message));
  }
}

function* doGetBonusPairing() {
  try {
    const { data } = yield call(api.get, URL.BONUS_PAIRING);
  
    yield put(BonusActions.doGetBonusPairingSuccess(data?.data));
  } catch (error) {
    yield put(BonusActions.doGetBonusPairingFailure(error.message));
  }
}

function* doFreshBonusPairing() {
  try {
    const { data } = yield call(api.post, URL.BONUS_PAIRING_FRESH);
  
    yield put(BonusActions.doRefreshBonusPairingSuccess(data?.data));
  } catch (error) {
    yield put(BonusActions.doRefreshBonusPairingFailure(error.message));
  }
}

function* doTrigerdBonusLevel() {
  try {
    const { data } = yield call(api.post, URL.BONUS_LEVEL_FRESH);
  
    yield all([
      put(BonusActions.doPostTrigerBonusLevelSuccess(data?.data)),
      put(BonusActions.doGetBonusLevelRequest())
    ]);

  } catch (error) {
    yield put(BonusActions.doPostTrigerBonusLevelFailure(error.message));
  }
}

export default function* actionWatchBonus() {
  yield takeLatest(Types.GET_BONUS_SPONSOR_REQUEST, doGetBonusSponsor);
  yield takeLatest(Types.GET_BONUS_LEVEL_REQUEST, doGetBonusLevel);
  yield takeLatest(Types.GET_BONUS_PAIRING_REQUEST, doGetBonusPairing);
  yield takeLatest(Types.REFRESH_BONUS_PAIRING_REQUEST, doFreshBonusPairing);
  yield takeLatest(Types.POST_TRIGER_BONUS_LEVEL_REQUEST, doTrigerdBonusLevel);
}
