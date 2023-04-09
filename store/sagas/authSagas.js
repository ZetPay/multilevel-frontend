import Cookies from 'js-cookie';
import {set, remove} from "local-storage";
import {call, put, takeLatest, all } from 'redux-saga/effects';
import { api, authorization, URL } from 'services/api';
import { Types } from 'store/actionTypes';
import { AuthActions } from 'store/redux/authReducer';
import { ProfileActions } from 'store/redux/profileReducer';

function* doLogin(data) {
  try {
    const {payload} = data;
    const response = yield call(authorization.post, URL.LOGIN, payload?.data);

    remove('logedin')
    api.defaults.headers.common.Authorization = `Bearer ${response?.data?.data?.token}`;
    yield all([
      put(AuthActions.doLoginSuccess(response.data)),
      put(ProfileActions.doGetProfileRequest())
    ])

    set('logedin',response?.data?.data?.token)
    Cookies.set("logedin",response?.data?.data?.token)
    payload?.message("Login SuccessFuly!")
    
    setTimeout(() => {
      payload?.navigate();
    },700);
  } catch (error) {
    if(error?.response?.data?.message){
      data?.payload?.error(error?.response?.data?.message)
    }else{
      data?.payload?.error("Username or password invalid!")
    }
    yield put(AuthActions.doLoginFailure(error.message));
  }
}

function* doLoginAdmin(data) {
  try {
    const {payload} = data;
    const response = yield call(authorization.post, URL.LOGIN_ADMIN, payload?.data);

    remove('logedin')
    api.defaults.headers.common.Authorization = `Bearer ${response?.data?.data?.token}`;
    yield all([
      put(AuthActions.doLoginAdminSuccess(response.data)),
      put(ProfileActions.doGetProfileRequest())
    ])

    set('logedin',response?.data?.data?.token)
    Cookies.set("logedin",response?.data?.data?.token)
    payload?.message("Login SuccessFuly!")
    
    setTimeout(() => {
      payload?.navigate();
    },700);
  } catch (error) {
    if(error?.response?.data?.message){
      data?.payload?.error(error?.response?.data?.message)
    }else{
      data?.payload?.error("Username or password invalid!")
    }
    yield put(AuthActions.doLoginAdminFailure(error.message));
  }
}

function* doRegister(data) {
    try {
      const {payload} = data;
      const response = yield call(authorization.post, URL.REGISTER, payload?.data);
  
      remove('logedin')
      api.defaults.headers.common.Authorization = `Bearer ${response?.data?.data?.token}`;
      yield all([
        put(ProfileActions.doGetProfileRequest()),
        put(AuthActions.doRegisterSuccess(response.data))
      ])
      set('logedin',response?.data?.data?.token)
      Cookies.set("logedin",response?.data?.data?.token)

      payload?.message("Register success!")
     
      setTimeout(() => {
        payload?.navigate();
      },700);
    } catch (error) {
      if(error?.response?.data?.message){
        data?.payload?.error(error?.response?.data?.message)
      }else{
        data?.payload?.error("Register error")
      }
    
      yield put(AuthActions.doRegisterFailure(error.message));
    }
}

function* doAddNewMembber(data) {
  try {
    const {payload} = data;
    const response = yield call(authorization.post, URL.REGISTER, payload?.data);

    yield all([
      put(ProfileActions.doGetProfileRequest()),
      put(AuthActions.doAddNewMemberSuccess(response.data))
    ])

    payload?.message("Register success!")
   
    setTimeout(() => {
      payload?.navigate();
    },700);
  } catch (error) {
    if(error?.response?.data?.message){
      data?.payload?.error(error?.response?.data?.message)
    }else{
      data?.payload?.error("Register error")
    }
  
    yield put(AuthActions.doAddNewMemberFailure(error.message));
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
    yield put(AuthActions.doCheckRefFailure(error.message));
  }
}

function* doCheckPosition(data) {
  try {
    const response = yield call(api.post, URL.CHECK_POSITION, data?.payload?.data);

    yield put(AuthActions.doCheckPositionSuccess(response.data));
    data?.payload?.message("success",response?.data?.message)
  } catch (error) {
    data?.payload?.message("error", error?.response?.data?.message)
    yield put(AuthActions.doCheckPositionFailure(error.message));
  }
}

export default function* actionWatchAuth() {
  yield takeLatest(Types.POST_LOGIN_REQUEST, doLogin);
  yield takeLatest(Types.POST_LOGIN_ADMIN_REQUEST, doLoginAdmin);
  yield takeLatest(Types.POST_REGISTER_REQUEST, doRegister);
  yield takeLatest(Types.POST_NEW_MEMBER_REQUEST, doAddNewMembber);
  yield takeLatest(Types.POST_VERIFICATION_REQUEST, doVerification);
  yield takeLatest(Types.CHECK_REF_REQUEST, doCheckRef);
  yield takeLatest(Types.CHECK_POSITION_REQUEST, doCheckPosition);
}
