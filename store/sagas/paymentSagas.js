import {call, put, takeLatest } from 'redux-saga/effects';
import { api, URL } from "services/api";
import { Types } from "store/actionTypes";
import { PaymentActions } from 'store/redux/paymentReducer';


function* doGetDepositList() {
    try {
      const { data } = yield call(api.get, URL.DEPOSIT_LIST );
    
      yield put(PaymentActions.doGetDepositListSuccess(data?.data));
    } catch (error) {
      yield put(PaymentActions.doGetDepositListFailure(error));
    }
}

function* doUpgradePaketDeposit(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.UPDATE_PAKET, payload);
  
    yield put(PaymentActions.doUpgradePaketSuccess(response?.data));
  } catch (error) {
    yield put(PaymentActions.doUpgradePaketFailure(error));
  }
}

export default function* actionWatchPayment() {
  yield takeLatest(Types.GET_DEPOSIT_LIST_REQUEST, doGetDepositList);
  yield takeLatest(Types.UPGRADE_PAKET_REQUEST, doUpgradePaketDeposit);
}
