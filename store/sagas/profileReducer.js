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

export default function* actionWatchProfile() {
  yield takeLatest(Types.GET_PROFILE_REQUEST, doGetProfile);
}
