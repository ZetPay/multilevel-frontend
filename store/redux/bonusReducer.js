import { Types } from "store/actionTypes";

export const BonusActions = {
    doGetBonusSponsorRequest: () => ({
      type: Types.GET_BONUS_SPONSOR_REQUEST
    }),
    doGetBonusSponsorSuccess: data => {
      return ({
        type: Types.GET_BONUS_SPONSOR_SUCCESS,
        payload: data,
      })
    },
    doGetBonusSponsorFailure: error => ({
      type: Types.GET_BONUS_SPONSOR_FAILURE,
      error,
    }),

    doGetBonusLevelRequest: () => ({
      type: Types.GET_BONUS_LEVEL_REQUEST,
    }),
    doGetBonusLevelSuccess: data => {
      return ({
        type: Types.GET_BONUS_LEVEL_SUCCESS,
        payload: data,
      })
    },
    doGetBonusLevelFailure: error => ({
      type: Types.GET_BONUS_LEVEL_FAILURE,
      error,
    }),

    doGetBonusPairingRequest: () => ({
      type: Types.GET_BONUS_PAIRING_REQUEST,
    }),
    doGetBonusPairingSuccess: data => {
      return ({
        type: Types.GET_BONUS_PAIRING_SUCCESS,
        payload: data,
      })
    },
    doGetBonusPairingFailure: error => ({
      type: Types.GET_BONUS_PAIRING_FAILURE,
      error,
    }),

    doPostTrigerBonusLevelRequest: () => ({
      type: Types.POST_TRIGER_BONUS_LEVEL_REQUEST,
    }),
    doPostTrigerBonusLevelSuccess: data => {
      return ({
        type: Types.POST_TRIGER_BONUS_LEVEL_SUCCESS,
        payload: data,
      })
    },
    doPostTrigerBonusLevelFailure: error => ({
      type: Types.POST_TRIGER_BONUS_LEVEL_FAILURE,
      error,
    })
}

const initialState = {
    sponsor: {data: [], fetching: false, error: null},
    level: {data: [], fetching: false, error: null},
    pairing: {data: [], fetching: false, error: null},
    bonus_level: {data: [], fetching: false, error: null},
};

const bonusReducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.GET_BONUS_SPONSOR_REQUEST:
        return {
          ...state,
          sponsor: {data: [], fetching: true, error: null},
        };
      case Types.GET_BONUS_SPONSOR_SUCCESS:
        return {
          ...state,
          sponsor: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_BONUS_SPONSOR_FAILURE:
        return {
          ...state,
          sponsor: {data: [], fetching: false, error: action.error},
        };

      case Types.GET_BONUS_LEVEL_REQUEST:
        return {
          ...state,
          level: {data: [], fetching: true, error: null},
        };
      case Types.GET_BONUS_LEVEL_SUCCESS:
        return {
          ...state,
          level: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_BONUS_LEVEL_FAILURE:
        return {
          ...state,
          level: {data: [], fetching: false, error: action.error},
        };

      case Types.GET_BONUS_PAIRING_REQUEST:
        return {
          ...state,
          pairing: {data: [], fetching: true, error: null},
        };
      case Types.GET_BONUS_PAIRING_SUCCESS:
        return {
          ...state,
          pairing: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_BONUS_PAIRING_FAILURE:
        return {
          ...state,
          pairing: {data: [], fetching: false, error: action.error},
        };

      case Types.POST_TRIGER_BONUS_LEVEL_REQUEST:
        return {
          ...state,
          bonus_level: {data: [], fetching: true, error: null},
        };
      case Types.POST_TRIGER_BONUS_LEVEL_SUCCESS:
        return {
          ...state,
          bonus_level: {data: action.payload, fetching: false, error: null},
        };
      case Types.POST_TRIGER_BONUS_LEVEL_FAILURE:
        return {
          ...state,
          bonus_level: {data: [], fetching: false, error: action.error},
        };
      default:
        return state;
    }
}

export default bonusReducer;