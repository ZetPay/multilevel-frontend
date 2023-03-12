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
    })
}

const initialState = {
    sponsor: {data: [], fetching: false, error: null},
    level: {data: [], fetching: false, error: null},
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
      default:
        return state;
    }
}

export default bonusReducer;