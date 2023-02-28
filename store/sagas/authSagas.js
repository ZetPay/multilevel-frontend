import {call, put, takeLatest } from 'redux-saga/effects';
import { api, URL } from 'services/api';
import { Types } from 'store/actionTypes';
import { AuthActions } from 'store/redux/authReducer';

function* doLogin(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.LOGIN, payload);

    yield put(AuthActions.doLoginSuccess(response.data));
    api.defaults.headers.common.Authorization = `${response?.data?.token?.type} ${response?.data?.token?.token}`;
    
  } catch (error) {
    yield put(AuthActions.doLoginSuccess([]));
  }
}

function* doRegister(data) {
    try {
      const {payload} = data;
      const response = yield call(api.post, URL.REGISTER, payload);
  
      yield put(AuthActions.doRegisterSuccess(response.data));
    } catch (error) {
      yield put(AuthActions.doRegisterFailure(error));
    }
}


function* doVerification(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.VERIFICATION, payload);

    yield put(AuthActions.doVerificationSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doVerificationSuccess([]));
  }
}

function* doPinCreated(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.CREATE_PIN, payload);

    yield put(AuthActions.doCreatePinSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doCreatePinSuccess([]));
  }
}

function* doPinVerificate(data) {
  try {
    const {datatosend, from, purchase, type} = data?.payload;
    const response = yield call(api.post, URL.VERIF_PIN, datatosend);

    yield put(AuthActions.doConfirmPinSuccess(response.data));
  } catch (error) {
    yield put(AuthActions.doConfirmPinSuccess([]));
  }
}

function* doForgotPin(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.FORGOT_PIN);

    yield put(AuthActions.doForgotPinSuccess(response.data));
    // navigate('ValidateOtp',{ from: 'forgot', device_token: payload });
  } catch (error) {
    yield put(AuthActions.doForgotPinSuccess([]));
  }
}

function* doCodeResetPin(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.CODE_RESET_PIN, payload);

    yield put(AuthActions.doCodeRessetPinSuccess(response.data));
    // navigate('CreatePin',{ from: payload?.code });
  } catch (error) {
    yield put(AuthActions.doCodeRessetPinSuccess([]));
  }
}

function* doResetPin(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.RESET_PIN, payload);

    yield put(AuthActions.doRessetPinSuccess(response.data));
    // navigate("ValidatePin")
  } catch (error) {
    yield put(AuthActions.doRessetPinSuccess([]));
  }
}


function* doUpdateProfiles(data) {
  try {
    const {payload} = data;
    const response = yield call(api.post, URL.UPDATE_PROFILE, payload);

    yield put(AuthActions.doUpdateProfileSuccess(response.data));
    // yield put(ProfileActions.dogetProfileRequest());
  } catch (error) {
    yield put(AuthActions.doUpdateProfileSuccess([]));
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

export default function* actionWatchAuth() {
  yield takeLatest(Types.POST_LOGIN_REQUEST, doLogin);
  yield takeLatest(Types.POST_REGISTER_REQUEST, doRegister);
  yield takeLatest(Types.POST_VERIFICATION_REQUEST, doVerification);
  yield takeLatest(Types.CREATE_PIN_REQUEST, doPinCreated);
  yield takeLatest(Types.CONFIRMATION_PIN_REQUEST, doPinVerificate);
  yield takeLatest(Types.FORGOT_PIN_REQUEST, doForgotPin);
  yield takeLatest(Types.CODE_RESSET_PIN_REQUEST, doCodeResetPin);
  yield takeLatest(Types.RESSET_PIN_REQUEST, doResetPin);
  yield takeLatest(Types.UPDATE_PROFILE_REQUEST, doUpdateProfiles);
  yield takeLatest(Types.CHECK_REF_REQUEST, doCheckRef);
}
