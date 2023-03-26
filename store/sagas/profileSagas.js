import {call, put, takeLatest } from 'redux-saga/effects';
import { api, URL } from "services/api";
import { Types } from "store/actionTypes";
import { ProfileActions } from '../redux/profileReducer';


function* doGetProfile() {
    try {
      const { data } = yield call(api.get, URL.PROFILE );
    
      yield put(ProfileActions.doGetProfileSuccess(data?.data));
    } catch (error) {
      yield put(ProfileActions.doGetProfileFailure(error));
    }
}

function* doGetHistoryOrder() {
  try {
    const { data } = yield call(api.get, URL.HISTORY_ORDER );
  
    yield put(ProfileActions.doGetHistoryOrderSuccess(data?.data));
  } catch (error) {
    yield put(ProfileActions.doGetHistoryOrderFailure(error));
  }
}

function* doUpdateProfile(param) {
  try {
    const { payload } = param;
    const { data } = yield call(api.put, URL.UPDATE_PROFILE, payload);
  
    yield put(ProfileActions.doUpdateProfileSuccess(data?.data));
  } catch (error) {
    yield put(ProfileActions.doUpdateProfileFailure(error));
  }
}

function* doGetTreeList() {
  try {
    const { data } = yield call(api.get, URL.TREE );
  
    yield put(ProfileActions.doGetTreeSuccess(data?.data));
  } catch (error) {
    yield put(ProfileActions.doGetTreeFailure(error));
  }
}

export default function* actionWatchProfile() {
  yield takeLatest(Types.GET_PROFILE_REQUEST, doGetProfile);
  yield takeLatest(Types.UPDATE_PROFILE_REQUEST, doUpdateProfile);
  yield takeLatest(Types.GET_HISTORY_ORDER_REQUEST, doGetHistoryOrder);
  yield takeLatest(Types.GET_TREE_LIST_REQUEST, doGetTreeList);
}
