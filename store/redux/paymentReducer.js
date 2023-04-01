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
    }),
    // order list
    doGetOrderListRequest: () => ({
      type: Types.GET_ADMIN_ORDER_LIST_REQUEST
    }),
    doGetOrderListSuccess: data => {
      return ({
        type: Types.GET_ADMIN_ORDER_LIST_SUCCESS,
        payload: data,
      })
    },
    doGetOrderListFailure: error => ({
      type: Types.GET_ADMIN_ORDER_LIST_FAILURE,
      error,
    }),
    // transaction list
    doGetTransactionListRequest: () => ({
      type: Types.GET_ADMIN_TRANSACTION_LIST_REQUEST
    }),
    doGetTransactionListSuccess: data => {
      return ({
        type: Types.GET_ADMIN_TRANSACTION_LIST_SUCCESS,
        payload: data,
      })
    },
    doGetTransactionListFailure: error => ({
      type: Types.GET_ADMIN_TRANSACTION_LIST_FAILURE,
      error,
    }),
    // approve payment
    doApproveTransactionRequest: data => ({
      type: Types.POST_APPROVE_TRANSACTION_REQUEST,
      payload: data,
    }),
    doApproveTransactionSuccess: data => {
      return ({
        type: Types.POST_APPROVE_TRANSACTION_SUCCESS,
        payload: data,
      })
    },
    doApproveTransactionFailure: error => ({
      type: Types.POST_APPROVE_TRANSACTION_FAILURE,
      error,
    }),
}

const initialState = {
    deposit_list: {data: [], fetching: false, error: null},
    paket: {data: [], fetching: false, error: null},
    order_list: {data: [], fetching: false, error: null},
    transaction_list: {data: [], fetching: false, error: null},
    transaction_status: {data: [], fetching: false, error: null},
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
      // order list
      case Types.GET_ADMIN_ORDER_LIST_REQUEST:
        return {
          ...state,
          order_list: {data: [], fetching: true, error: null},
        };
      case Types.GET_ADMIN_ORDER_LIST_SUCCESS:
        return {
          ...state,
          order_list: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_ADMIN_ORDER_LIST_FAILURE:
        return {
          ...state,
          order_list: {data: [], fetching: false, error: action.error},
        };
      // transaction list
      case Types.GET_ADMIN_TRANSACTION_LIST_REQUEST:
        return {
          ...state,
          transaction_list: {data: [], fetching: true, error: null},
        };
      case Types.GET_ADMIN_TRANSACTION_LIST_SUCCESS:
        return {
          ...state,
          transaction_list: {data: action.payload, fetching: false, error: null},
        };
      case Types.GET_ADMIN_TRANSACTION_LIST_FAILURE:
        return {
          ...state,
          transaction_list: {data: [], fetching: false, error: action.error},
        };
       // transaction status
       case Types.POST_APPROVE_TRANSACTION_REQUEST:
        return {
          ...state,
          transaction_status: {data: [], fetching: true, error: null},
        };
      case Types.POST_APPROVE_TRANSACTION_SUCCESS:
        return {
          ...state,
          transaction_status: {data: action.payload, fetching: false, error: null},
        };
      case Types.POST_APPROVE_TRANSACTION_FAILURE:
        return {
          ...state,
          transaction_status: {data: [], fetching: false, error: action.error},
        };
      default:
        return state;
    }
}

export default paymentReducer;