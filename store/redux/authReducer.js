import { Types } from "store/actionTypes";

export const AuthActions = {
  doLoginRequest: data => ({
    type: Types.POST_LOGIN_REQUEST,
    payload: data,
  }),
  doLoginSuccess: data => ({
    type: Types.POST_LOGIN_SUCCESS,
    payload: data,
  }),
  doLoginFailure: error => ({
    type: Types.POST_LOGIN_FAILURE,
    error,
  }),
  // verification
  doVerificationRequest: data => ({
    type: Types.POST_VERIFICATION_REQUEST,
    payload: data,
  }),
  doVerificationSuccess: data => ({
    type: Types.POST_VERIFICATION_SUCCESS,
    payload: data,
  }),
  doVerificationFailure: error => ({
    type: Types.POST_VERIFICATION_FAILURE,
    error,
  }),
  // create pin
  doCreatePinRequest: data => ({
    type: Types.CREATE_PIN_REQUEST,
    payload: data,
  }),
  doCreatePinSuccess: data => ({
    type: Types.CREATE_PIN_SUCCESS,
    payload: data,
  }),
  doCreatePinFailure: error => ({
    type: Types.CREATE_PIN_FAILURE,
    error,
  }),
  // create pin
  doConfirmPinRequest: data => ({
    type: Types.CONFIRMATION_PIN_REQUEST,
    payload: data,
  }),
  doConfirmPinSuccess: data => ({
    type: Types.CONFIRMATION_PIN_SUCCESS,
    payload: data,
  }),
  doConfirmPinFailure: error => ({
    type: Types.CONFIRMATION_PIN_FAILURE,
    error,
  }),
  // Forgot pin
  doForgotPinRequest: data => ({
    type: Types.FORGOT_PIN_REQUEST,
    payload: data,
  }),
  doForgotPinSuccess: data => ({
    type: Types.FORGOT_PIN_SUCCESS,
    payload: data,
  }),
  doForgotPinFailure: error => ({
    type: Types.FORGOT_PIN_FAILURE,
    error,
  }),
  // code resset pin
  doCodeRessetPinRequest: data => ({
    type: Types.CODE_RESSET_PIN_REQUEST,
    payload: data,
  }),
  doCodeRessetPinSuccess: data => ({
    type: Types.CODE_RESSET_PIN_SUCCESS,
    payload: data,
  }),
  doCodeRessetPinFailure: error => ({
    type: Types.CODE_RESSET_PIN_FAILURE,
    error,
  }),
  // resset pin
  doRessetPinRequest: data => ({
    type: Types.RESSET_PIN_REQUEST,
    payload: data,
  }),
  doRessetPinSuccess: data => ({
    type: Types.RESSET_PIN_SUCCESS,
    payload: data,
  }),
  doRessetPinFailure: error => ({
    type: Types.RESSET_PIN_FAILURE,
    error,
  }),
  //upload avatar
  doUploadAvatarRequest: data => ({
    type: Types.UPLOAD_AVATAR_REQUEST,
    payload: data,
  }),
  doUploadAvatarSuccess: data => ({
    type: Types.UPLOAD_AVATAR_SUCCESS,
    payload: data,
  }),
  doUploadAvatarFailure: error => ({
    type: Types.UPLOAD_AVATAR_FAILURE,
    error,
  }),
  // resset pin
  doUpdateProfileRequest: data => ({
    type: Types.UPDATE_PROFILE_REQUEST,
    payload: data,
  }),
  doUpdateProfileSuccess: data => ({
    type: Types.UPDATE_PROFILE_SUCCESS,
    payload: data,
  }),
  doUpdateProfileFailure: error => ({
    type: Types.UPDATE_PROFILE_FAILURE,
    error,
  }),
  // logout
  destroyUserDataRequest: () => ({
    type: Types.DESTROY_USER_DATA,
  })
};

const initialState = {
  login: {data: [], fetching: false, error: null},
  verif: {data: [], fetching: false, error: null},
  pin: {data: [], fetching: false, error: null},
  pin_confirm: {data: [], fetching: false, error: null},
  forgot_pin: {data: [], fetching: false, error: null},
  code_resset_pin: {data: [], fetching: false, error: null},
  reset_pin: {data: [], fetching: false, error: null},
  avatar: {data: [], fetching: false, error: null},
  profile: {data: [], fetching: false, error: null},
};

export const AuthSelector = {
  getCredent: state => state.authReducer.login,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.POST_LOGIN_REQUEST:
      return {
        ...state,
        login: {data: [], fetching: true, error: null},
      };
    case Types.POST_LOGIN_SUCCESS:
      return {
        ...state,
        login: {data: action.payload, fetching: false, error: null},
      };
    case Types.POST_LOGIN_FAILURE:
      return {
        ...state,
        login: {data: [], fetching: false, error: action.error},
      };
    // verivication otp
    case Types.POST_VERIFICATION_REQUEST:
      return {
        ...state,
        verif: {data: [], fetching: true, error: null},
      };
    case Types.POST_VERIFICATION_SUCCESS:
      return {
        ...state,
        verif: {data: action.payload, fetching: false, error: null},
      };
    case Types.POST_VERIFICATION_FAILURE:
      return {
        ...state,
        verif: {data: [], fetching: false, error: action.error},
      };
    // create pin
    case Types.CREATE_PIN_REQUEST:
      return {
        ...state,
        pin: {data: [], fetching: true, error: null},
      };
    case Types.CREATE_PIN_SUCCESS:
      return {
        ...state,
        pin: {data: action.payload, fetching: false, error: null},
      };
    case Types.CREATE_PIN_FAILURE:
      return {
        ...state,
        pin: {data: [], fetching: false, error: action.error},
      };
    // confirm pin
    case Types.CONFIRMATION_PIN_REQUEST:
      return {
        ...state,
        pin_confirm: {data: [], fetching: true, error: null},
      };
    case Types.CONFIRMATION_PIN_SUCCESS:
      return {
        ...state,
        pin_confirm: {data: action.payload, fetching: false, error: null},
      };
    case Types.CONFIRMATION_PIN_FAILURE:
      return {
        ...state,
        pin_confirm: {data: [], fetching: false, error: action.error},
      };
    // forgot pin
    case Types.FORGOT_PIN_REQUEST:
      return {
        ...state,
        forgot_pin: {data: [], fetching: true, error: null},
      };
    case Types.FORGOT_PIN_SUCCESS:
      return {
        ...state,
        forgot_pin: {data: action.payload, fetching: false, error: null},
      };
    case Types.FORGOT_PIN_FAILURE:
      return {
        ...state,
        forgot_pin: {data: [], fetching: false, error: action.error},
      };
    // code resset pin
    case Types.CODE_RESSET_PIN_REQUEST:
      return {
        ...state,
        code_resset_pin: {data: [], fetching: true, error: null},
      };
    case Types.CODE_RESSET_PIN_SUCCESS:
      return {
        ...state,
        code_resset_pin: {data: action.payload, fetching: false, error: null},
      };
    case Types.CODE_RESSET_PIN_FAILURE:
      return {
        ...state,
        code_resset_pin: {data: [], fetching: false, error: action.error},
      };
     // resset pin
    case Types.RESSET_PIN_REQUEST:
      return {
        ...state,
        reset_pin: {data: [], fetching: true, error: null},
      };
    case Types.RESSET_PIN_SUCCESS:
      return {
        ...state,
        reset_pin: {data: action.payload, fetching: false, error: null},
      };
    case Types.RESSET_PIN_FAILURE:
      return {
        ...state,
        reset_pin: {data: [], fetching: false, error: action.error},
      }; 
    // upload avatar
    case Types.UPLOAD_AVATAR_REQUEST:
      return {
        ...state,
        avatar: {data: [], fetching: true, error: null},
      };
    case Types.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: {data: action.payload, fetching: false, error: null},
      };
    case Types.UPLOAD_AVATAR_FAILURE:
      return {
        ...state,
        avatar: {data: [], fetching: false, error: action.error},
      }; 
    // update profie
    case Types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        profile: {data: [], fetching: true, error: null},
      };
    case Types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {data: action.payload, fetching: false, error: null},
      };
    case Types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        profile: {data: [], fetching: false, error: action.error},
      }; 
    // destroy users data
    case Types.DESTROY_USER_DATA:
      return {
        ...state,
        login: {data: [], fetching: false, error: action.error},
      }; 
    default:
      return state;
  }
};

export default authReducer;