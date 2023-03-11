import { Types } from "store/actionTypes";

export const ProfileActions = {
    doGetProfileRequest: () => ({
      type: Types.GET_PROFILE_REQUEST
    }),
    doGetProfileSuccess: data => ({
      type: Types.GET_PROFILE_SUCCESS,
      payload: data,
    }),
    doGetProfileFailure: error => ({
      type: Types.GET_PROFILE_FAILURE,
      error,
    }),

    // update profile
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
    })
}

const initialState = {
  profile: {data: [], fetching: false, error: null},
  profile_update: {data: [], fetching: false, error: null}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.GET_PROFILE_REQUEST:
        return {
          ...state,
          profile: {data: [], fetching: true, error: null},
        };
      case Types.GET_PROFILE_SUCCESS:
        return {
          ...state,
          profile: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_PROFILE_FAILURE:
        return {
          ...state,
          profile: {data: [], fetching: false, error: action.error},
        };
      // update profile
      case Types.UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          profile_update: {data: [], fetching: true, error: null},
        };
      case Types.UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          profile_update: {data: action.payload, fetching: false, error: null},
        };
      case Types.UPDATE_PROFILE_FAILURE:
        return {
          ...state,
          profile_update: {data: [], fetching: false, error: action.error},
        };
        default:
            return state;
    }
};  

export default profileReducer;