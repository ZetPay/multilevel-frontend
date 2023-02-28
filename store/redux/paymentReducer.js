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
    })
}

const initialState = {
    deposit_list: {data: [], fetching: false, error: null},
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
      default:
        return state;
    }
}

export default paymentReducer;