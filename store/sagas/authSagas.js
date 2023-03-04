import Cookies from 'js-cookie';
import {call, put, takeLatest } from 'redux-saga/effects';
import { api, URL } from 'services/api';
import { Types } from 'store/actionTypes';
import { AuthActions } from 'store/redux/authReducer';

function* doLogin(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.LOGIN, payload?.data);

    yield put(AuthActions.doLoginSuccess(response.data));
    api.defaults.headers.common.Authorization = `Bearer ${response?.data?.data?.token}`;
    
    Cookies.set("logedin",response?.data?.data?.token)
    payload?.message("Login SuccessFuly!")
    
    setTimeout(() => {
      payload?.navigate();
    }, 1000);
  } catch (error) {
    data?.payload?.error("Username or password invalid!")
    yield put(AuthActions.doLoginFailure(error));
  }
}

function* doRegister(data) {
    try {
      const {payload} = data;
      const response = yield call(api.post, URL.REGISTER, payload?.data);
  
      yield put(AuthActions.doRegisterSuccess(response.data));
      payload?.message("Register success Please Login!")
      payload.navigate();
    } catch (error) {
      data?.payload?.error("Register error")
      yield put(AuthActions.doRegisterFailure(error));
    }
}


function* doVerification(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.VERIFICATION, payload);

    yield put(AuthActions.doVerificationSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doVerificationFailure(error));
  }
}

function* doCheckRef(data) {
  try {
    const response = yield call(api.post, URL.VALIDATE_REFERAL, data?.payload);

    yield put(AuthActions.doCheckRefSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doCheckRefFailure(error));
  }
}

function* doCheckPosition(data) {
  try {
    const response = yield call(api.post, URL.CHECK_POSITION, data?.payload?.data);

    yield put(AuthActions.doCheckPositionSuccess(response.data));
    data?.payload?.message("success",response?.data?.message)
  } catch (error) {
    data?.payload?.message("error", error?.response?.data?.message)
    yield put(AuthActions.doCheckPositionFailure(error));
  }
}

export default function* actionWatchAuth() {
  yield takeLatest(Types.POST_LOGIN_REQUEST, doLogin);
  yield takeLatest(Types.POST_REGISTER_REQUEST, doRegister);
  yield takeLatest(Types.POST_VERIFICATION_REQUEST, doVerification);
  yield takeLatest(Types.CHECK_REF_REQUEST, doCheckRef);
  yield takeLatest(Types.CHECK_POSITION_REQUEST, doCheckPosition);
}
