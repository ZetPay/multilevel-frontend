import {call, put, takeLatest } from 'redux-saga/effects';
import { api, URL } from "services/api";
import { Types } from "store/actionTypes";
import { BonusActions } from 'store/redux/bonusReducer';


function* doGetBonusLevel() {
    try {
      const { data } = yield call(api.get, URL.BONUS_LEVEL );
    
      yield put(BonusActions.doGetBonusLevelSuccess(data?.data));
    } catch (error) {
      yield put(BonusActions.doGetBonusLevelFailure(error));
    }
}

function* doGetBonusSponsor() {
  try {
    const { data } = yield call(api.get, URL.BONUS_SPONSOR);
  
    yield put(BonusActions.doGetBonusSponsorSuccess(data?.data));
  } catch (error) {
    yield put(BonusActions.doGetBonusSponsorFailure(error));
  }
}

export default function* actionWatchBonus() {
  yield takeLatest(Types.GET_BONUS_SPONSOR_REQUEST, doGetBonusSponsor);
  yield takeLatest(Types.GET_BONUS_LEVEL_REQUEST, doGetBonusLevel);
}
