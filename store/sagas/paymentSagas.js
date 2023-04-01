import {all, call, put, takeLatest } from 'redux-saga/effects';
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

function* doGetOrderList(data) {
  try {
    const { payload } = data
    const response = yield call(api.get, `${URL.ORDER_LIST}?page=${payload}`);
  
    yield put(PaymentActions.doGetOrderListSuccess(response?.data));
  } catch (error) {
    yield put(PaymentActions.doGetOrderListFailure(error));
  }
}

function* doGetTransactionList() {
  try {
    const response = yield call(api.get, URL.TRANSACTION_LIST);
  
    yield put(PaymentActions.doGetTransactionListSuccess(response?.data));
  } catch (error) {
    yield put(PaymentActions.doGetTransactionListFailure(error));
  }
}

function* doApproveTransaction(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.APPROVE_TRANSACTION, payload?.data);
  
    yield all([
      put(PaymentActions.doApproveTransactionSuccess(response?.data)),
      put(PaymentActions.doGetOrderListRequest())
    ])

    payload?.message("Change Status Transaction success!")
  } catch (error) {
    yield put(PaymentActions.doApproveTransactionFailure(error));
  }
}

export default function* actionWatchPayment() {
  yield takeLatest(Types.GET_DEPOSIT_LIST_REQUEST, doGetDepositList);
  yield takeLatest(Types.UPGRADE_PAKET_REQUEST, doUpgradePaketDeposit);
  yield takeLatest(Types.GET_ADMIN_ORDER_LIST_REQUEST, doGetOrderList);
  yield takeLatest(Types.GET_ADMIN_TRANSACTION_LIST_REQUEST, doGetTransactionList);
  yield takeLatest(Types.POST_APPROVE_TRANSACTION_REQUEST, doApproveTransaction);
}
