import { Types } from "store/actionTypes";

export const PaymentActions = {
    doGetDepositListRequest: () => ({
      type: Types.GET_DEPOSIT_LIST_REQUEST
    }),
    doGetDepositListSuccess: data => {
      return ({
        type: Types.GET_DEPOSIT_LIST_SUCCESS,
        payload: data,
      })
    },
    doGetDepositListFailure: error => ({
      type: Types.GET_DEPOSIT_LIST_FAILURE,
      error,
    }),
    doUpgradePaketRequest: data => ({
      type: Types.UPGRADE_PAKET_REQUEST,
      payload: data,
    }),
    doUpgradePaketSuccess: data => {
      return ({
        type: Types.UPGRADE_PAKET_SUCCESS,
        payload: data,
      })
    },
    doUpgradePaketFailure: error => ({
      type: Types.UPGRADE_PAKET_FAILURE,
      error,
    })
}

const initialState = {
    deposit_list: {data: [], fetching: false, error: null},
    paket: {data: [], fetching: false, error: null},
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.GET_DEPOSIT_LIST_REQUEST:
        return {
          ...state,
          deposit_list: {data: [], fetching: true, error: null},
        };
      case Types.GET_DEPOSIT_LIST_SUCCESS:
        return {
          ...state,
          deposit_list: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_DEPOSIT_LIST_FAILURE:
        return {
          ...state,
          deposit_list: {data: [], fetching: false, error: action.error},
        };
      case Types.UPGRADE_PAKET_REQUEST:
        return {
          ...state,
          paket: {data: [], fetching: true, error: null},
        };
      case Types.UPGRADE_PAKET_SUCCESS:
        return {
          ...state,
          paket: {data: action.payload, fetching: false, error: null},
        };
      case Types.UPGRADE_PAKET_FAILURE:
        return {
          ...state,
          paket: {data: [], fetching: false, error: action.error},
        };
      default:
        return state;
    }
}

export default paymentReducer;