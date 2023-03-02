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
  // register
  doRegisterRequest: data => ({
    type: Types.POST_REGISTER_REQUEST,
    payload: data,
  }),
  doRegisterSuccess: data => ({
    type: Types.POST_REGISTER_SUCCESS,
    payload: data,
  }),
  doRegisterFailure: error => ({
    type: Types.POST_REGISTER_FAILURE,
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
  // check ref
  doCheckRefRequest: data => ({
    type: Types.CHECK_REF_REQUEST,
    payload: data,
  }),
  doCheckRefSuccess: data => ({
    type: Types.CHECK_REF_SUCCESS,
    payload: data,
  }),
  doCheckRefFailure: error => ({
    type: Types.CHECK_REF_FAILURE,
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
  //check position
  doCheckPositionRequest: data => ({
    type: Types.CHECK_POSITION_REQUEST,
    payload: data,
  }),
  doCheckPositionSuccess: data => ({
    type: Types.CHECK_POSITION_SUCCESS,
    payload: data,
  }),
  doCheckPositionFailure: error => ({
    type: Types.CHECK_POSITION_FAILURE,
    error,
  }),
  // logout
  destroyUserDataRequest: () => ({
    type: Types.DESTROY_USER_DATA,
  })
};

const initialState = {
  login: {data: [], fetching: false, error: null},
  register: {data: [], fetching: false, error: null},
  verif: {data: [], fetching: false, error: null},
  ref: {data: [], fetching: false, error: null},
  avatar: {data: [], fetching: false, error: null},
  position: {data: [], fetching: false, error: null},
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
    // Register
    case Types.POST_REGISTER_REQUEST:
      return {
        ...state,
        register: {data: [], fetching: true, error: null},
      };
    case Types.POST_REGISTER_SUCCESS:
      return {
        ...state,
        register: {data: action.payload, fetching: false, error: null},
      };
    case Types.POST_REGISTER_FAILURE:
      return {
        ...state,
        register: {data: [], fetching: false, error: action.error},
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
    // check ref
    case Types.CHECK_REF_REQUEST:
      return {
        ...state,
        ref: {data: [], fetching: true, error: null},
      };
    case Types.CHECK_REF_SUCCESS:
      return {
        ...state,
        ref: {data: action.payload, fetching: false, error: null},
      };
    case Types.CHECK_REF_FAILURE:
      return {
        ...state,
        ref: {data: [], fetching: false, error: action.error},
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
    // upload avatar
    case Types.CHECK_POSITION_REQUEST:
      return {
        ...state,
        position: {data: [], fetching: true, error: null},
      };
    case Types.CHECK_POSITION_SUCCESS:
      return {
        ...state,
        position: {data: action.payload, fetching: false, error: null},
      };
    case Types.CHECK_POSITION_FAILURE:
      return {
        ...state,
        position: {data: [], fetching: false, error: action.error},
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