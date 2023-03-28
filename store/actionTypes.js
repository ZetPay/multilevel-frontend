const Types = {
    POST_LOGIN_REQUEST: 'POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS: 'POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE: 'POST_LOGIN_FAILURE',

    POST_REGISTER_REQUEST: 'POST_REGISTER_REQUEST',
    POST_REGISTER_SUCCESS: 'POST_REGISTER_SUCCESS',
    POST_REGISTER_FAILURE: 'POST_REGISTER_FAILURE',
  
    DESTROY_USER_DATA: 'DESTROY_USER_DATA',
  
    GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: 'GET_PROFILE_FAILURE',
  
    POST_VERIFICATION_REQUEST: 'POST_VERIFICATION_REQUEST',
    POST_VERIFICATION_SUCCESS: 'POST_VERIFICATION_SUCCESS',
    POST_VERIFICATION_FAILURE: 'POST_VERIFICATION_FAILURE',
  
    CHECK_POSITION_REQUEST: 'CHECK_POSITION_REQUEST',
    CHECK_POSITION_SUCCESS: 'CHECK_POSITION_SUCCESS',
    CHECK_POSITION_FAILURE: 'CHECK_POSITION_FAILURE',
    
    CONFIRMATION_PIN_REQUEST: 'CONFIRMATION_PIN_REQUEST',
    CONFIRMATION_PIN_SUCCESS: 'CONFIRMATION_PIN_SUCCESS',
    CONFIRMATION_PIN_FAILURE: 'CONFIRMATION_PIN_FAILURE',
  
    FORGOT_PIN_REQUEST: 'FORGOT_PIN_REQUEST',
    FORGOT_PIN_SUCCESS: 'FORGOT_PIN_SUCCESS',
    FORGOT_PIN_FAILURE: 'FORGOT_PIN_FAILURE',
  
    CODE_RESSET_PIN_REQUEST: 'CODE_RESSET_PIN_REQUEST',
    CODE_RESSET_PIN_SUCCESS: 'CODE_RESSET_PIN_SUCCESS',
    CODE_RESSET_PIN_FAILURE: 'CODE_RESSET_PIN_FAILURE',
  
    RESSET_PIN_REQUEST: 'RESSET_PIN_REQUEST',
    RESSET_PIN_SUCCESS: 'RESSET_PIN_SUCCESS',
    RESSET_PIN_FAILURE: 'RESSET_PIN_FAILURE',
  
    UPLOAD_AVATAR_REQUEST: 'UPLOAD_AVATAR_REQUEST',
    UPLOAD_AVATAR_SUCCESS: 'UPLOAD_AVATAR_SUCCESS',
    UPLOAD_AVATAR_FAILURE: 'UPLOAD_AVATAR_FAILURE',
  
    UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILURE: 'UPLOAD_AVATAR_FAILURE',
  
    CHECK_REF_REQUEST: 'CHECK_REF_REQUEST',
    CHECK_REF_SUCCESS: 'CHECK_REF_SUCCESS',
    CHECK_REF_FAILURE: 'CHECK_REF_FAILURE',
  
    // profile types
    GET_PLACE_REQUEST: 'GET_PLACE_REQUEST',
    GET_PLACE_SUCCESS: 'GET_PLACE_SUCCESS',
    GET_PLACE_FAILURE: 'GET_PLACE_FAILURE',
  
    POST_CREATE_OUTLET_REQUEST: 'POST_CREATE_OUTLET_REQUEST',
    POST_CREATE_OUTLET_SUCCESS: 'POST_CREATE_OUTLET_SUCCESS',
    POST_CREATE_OUTLET_FAILURE: 'POST_CREATE_OUTLET_FAILURE',
  
    GET_PAYMENT_LIST_REQUEST: 'GET_PAYMENT_LIST_REQUEST',
    GET_PAYMENT_LIST_SUCCESS: 'GET_PAYMENT_LIST_SUCCESS',
    GET_PAYMENT_LIST_FAILURE: 'GET_PAYMENT_LIST_FAILURE',
  
    BUY_PRODUCT_PRABAYAR_REQUEST: 'BUY_PRODUCT_PRABAYAR_REQUEST',
    BUY_PRODUCT_PRABAYAR_SUCCESS: 'BUY_PRODUCT_PRABAYAR_SUCCESS',
    BUY_PRODUCT_PRABAYAR_FAILURE: 'BUY_PRODUCT_PRABAYAR_FAILURE',
  
    BUY_PRODUCT_PASCABAYAR_REQUEST: 'BUY_PRODUCT_PASCABAYAR_REQUEST',
    BUY_PRODUCT_PASCABAYAR_SUCCESS: 'BUY_PRODUCT_PASCABAYAR_SUCCESS',
    BUY_PRODUCT_PASCABAYAR_FAILURE: 'BUY_PRODUCT_PASCABAYAR_FAILURE',
  
    POST_DEPOSIT_PAYMENT_REQUEST: 'POST_DEPOSIT_PAYMENT_REQUEST',
    POST_DEPOSIT_PAYMENT_SUCCESS: 'POST_DEPOSIT_PAYMENT_SUCCESS',
    POST_DEPOSIT_PAYMENT_FAILURE: 'POST_DEPOSIT_PAYMENT_FAILURE',
    
    GET_CALBACK_DEPOSIT_PAYMENT_REQUEST: 'GET_CALBACK_DEPOSIT_PAYMENT_REQUEST',
    GET_CALBACK_DEPOSIT_PAYMENT_SUCCESS: 'GET_CALBACK_DEPOSIT_PAYMENT_SUCCESS',
    GET_CALBACK_DEPOSIT_PAYMENT_FAILURE: 'GET_CALBACK_DEPOSIT_PAYMENT_FAILURE',
  
    POST_CALBACK_DEPOSIT_PAYMENT_REQUEST: 'POST_CALBACK_DEPOSIT_PAYMENT_REQUEST',
    POST_CALBACK_DEPOSIT_PAYMENT_SUCCESS: 'POST_CALBACK_DEPOSIT_PAYMENT_SUCCESS',
    POST_CALBACK_DEPOSIT_PAYMENT_FAILURE: 'POST_CALBACK_DEPOSIT_PAYMENT_FAILURE',
  
    // product prabayar
    GET_OPRATOR_LIST_REQUEST: 'GET_OPRATOR_LIST_REQUEST',
    GET_OPRATOR_LIST_SUCCESS: 'GET_OPRATOR_LIST_SUCCESS',
    GET_OPRATOR_LIST_FAILURE: 'GET_OPRATOR_LIST_FAILURE',
  
    GET_OPRATOR_PRODUCT_REQUEST: 'GET_OPRATOR_PRODUCT_REQUEST',
    GET_OPRATOR_PRODUCT_SUCCESS: 'GET_OPRATOR_PRODUCT_SUCCESS',
    GET_OPRATOR_PRODUCT_FAILURE: 'GET_OPRATOR_PRODUCT_FAILURE',
  
    // product pascabayar
    GET_OPRATOR_PASCABAYAR_LIST_REQUEST: 'GET_OPRATOR_PASCABAYAR_LIST_REQUEST',
    GET_OPRATOR_PASCABAYAR_LIST_SUCCESS: 'GET_OPRATOR_PASCABAYAR_LIST_SUCCESS',
    GET_OPRATOR_PASCABAYAR_LIST_FAILURE: 'GET_OPRATOR_PASCABAYAR_LIST_FAILURE',
  
    GET_OPRATOR_PASCABAYAR_PRODUCT_REQUEST: 'GET_OPRATOR_PASCABAYAR_PRODUCT_REQUEST',
    GET_OPRATOR_PASCABAYAR_PRODUCT_SUCCESS: 'GET_OPRATOR_PASCABAYAR_PRODUCT_SUCCESS',
    GET_OPRATOR_PASCABAYAR_PRODUCT_FAILURE: 'GET_OPRATOR_PASCABAYAR_PRODUCT_FAILURE',
  
    GET_ID_PELANGGAN_REQUEST: 'GET_ID_PELANGGAN_REQUEST',
    GET_ID_PELANGGAN_SUCCESS: 'GET_ID_PELANGGAN_SUCCESS',
    GET_ID_PELANGGAN_FAILURE: 'GET_ID_PELANGGAN_FAILURE',
  
    GET_PASCABAYAR_BILL_REQUEST: 'GET_PASCABAYAR_BILL_REQUEST',
    GET_PASCABAYAR_BILL_SUCCESS: 'GET_PASCABAYAR_BILL_SUCCESS',
    GET_PASCABAYAR_BILL_FAILURE: 'GET_PASCABAYAR_BILL_FAILURE',
  
    GET_HISTORY_ORDER_REQUEST: 'GET_HISTORY_ORDER_REQUEST',
    GET_HISTORY_ORDER_SUCCESS: 'GET_HISTORY_ORDER_SUCCESS',
    GET_HISTORY_ORDER_FAILURE: 'GET_HISTORY_ORDER_FAILURE',
  
    CHECK_ID_GAME_REQUEST: 'CHECK_ID_GAME_REQUEST',
    CHECK_ID_GAME_SUCCESS: 'CHECK_ID_GAME_SUCCESS',
    CHECK_ID_GAME_FAILURE: 'CHECK_ID_GAME_FAILURE',
  
    GET_ANNOUNCEMENT_ALL_REQUEST: 'GET_ANNOUNCEMENT_ALL_REQUEST',
    GET_ANNOUNCEMENT_ALL_SUCCESS: 'GET_ANNOUNCEMENT_ALL_SUCCESS',
    GET_ANNOUNCEMENT_ALL_FAILURE: 'GET_ANNOUNCEMENT_ALL_FAILURE',
  
    GET_ANNOUNCEMENT_INDIVIDU_REQUEST: 'GET_ANNOUNCEMENT_INDIVIDU_REQUEST',
    GET_ANNOUNCEMENT_INDIVIDU_SUCCESS: 'GET_ANNOUNCEMENT_INDIVIDU_SUCCESS',
    GET_ANNOUNCEMENT_INDIVIDU_FAILURE: 'GET_ANNOUNCEMENT_INDIVIDU_FAILURE',
    
    POST_READ_ANNOUNCEMENT_REQUEST: 'POST_READ_ANNOUNCEMENT_REQUEST',
    POST_READ_ANNOUNCEMENT_SUCCESS: 'POST_READ_ANNOUNCEMENT_SUCCESS',
    POST_READ_ANNOUNCEMENT_FAILURE: 'POST_READ_ANNOUNCEMENT_FAILURE',

    GET_DEPOSIT_LIST_REQUEST: 'GET_DEPOSIT_LIST_REQUEST',
    GET_DEPOSIT_LIST_SUCCESS: 'GET_DEPOSIT_LIST_SUCCESS',
    GET_DEPOSIT_LIST_FAILURE: 'GET_DEPOSIT_LIST_FAILURE',

    UPGRADE_PAKET_REQUEST: 'UPGRADE_PAKET_REQUEST',
    UPGRADE_PAKET_SUCCESS: 'UPGRADE_PAKET_SUCCESS',
    UPGRADE_PAKET_FAILURE: 'UPGRADE_PAKET_FAILURE',

    GET_BONUS_LEVEL_REQUEST: 'GET_BONUS_LEVEL_REQUEST',
    GET_BONUS_LEVEL_SUCCESS: 'GET_BONUS_LEVEL_SUCCESS',
    GET_BONUS_LEVEL_FAILURE: 'GET_BONUS_LEVEL_FAILURE',

    GET_BONUS_SPONSOR_REQUEST: 'GET_BONUS_SPONSOR_REQUEST',
    GET_BONUS_SPONSOR_SUCCESS: 'GET_BONUS_SPONSOR_SUCCESS',
    GET_BONUS_SPONSOR_FAILURE: 'GET_BONUS_SPONSOR_FAILURE',

    GET_BONUS_PAIRING_REQUEST: 'GET_BONUS_PAIRING_REQUEST',
    GET_BONUS_PAIRING_SUCCESS: 'GET_BONUS_PAIRING_SUCCESS',
    GET_BONUS_PAIRING_FAILURE: 'GET_BONUS_PAIRING_FAILURE',

    GET_ADMIN_ORDER_LIST_REQUEST: 'GET_ADMIN_ORDER_LIST_REQUEST',
    GET_ADMIN_ORDER_LIST_SUCCESS: 'GET_ADMIN_ORDER_LIST_SUCCESS',
    GET_ADMIN_ORDER_LIST_FAILURE: 'GET_ADMIN_ORDER_LIST_FAILURE',

    GET_ADMIN_TRANSACTION_LIST_REQUEST: 'GET_ADMIN_TRANSACTION_LIST_REQUEST',
    GET_ADMIN_TRANSACTION_LIST_SUCCESS: 'GET_ADMIN_TRANSACTION_LIST_SUCCESS',
    GET_ADMIN_TRANSACTION_LIST_FAILURE: 'GET_ADMIN_TRANSACTION_LIST_FAILURE',

    GET_TREE_LIST_REQUEST: 'GET_TREE_LIST_REQUEST',
    GET_TREE_LIST_SUCCESS: 'GET_TREE_LIST_SUCCESS',
    GET_TREE_LIST_FAILURE: 'GET_TREE_LIST_FAILURE',
  
    MY_PLACE: 'MY_PLACE',
  };
  
  export { Types };