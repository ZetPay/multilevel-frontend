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

export default function* actionWatchPayment() {
  yield takeLatest(Types.GET_DEPOSIT_LIST_REQUEST, doGetDepositList);
}
