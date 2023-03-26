import axios from 'axios';
import {get} from "local-storage";

const authorization = axios.create({
  baseURL: `http://bcastarx.com/dev/api/`, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

const api = axios.create({
  baseURL: `http://bcastarx.com/dev/api/`, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${get('logedin')}`
  },
});

const URL = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    PROFILE: 'profile',
    CHECK_POSITION: 'check-position',
    UPDATE_PROFILE: 'profile/update',
    UPDATE_PAKET: 'profile/upgrade',
    HISTORY_ORDER: 'profile/history/orders',
    BONUS_LEVEL: 'bonus/level',
    BONUS_SPONSOR: 'bonus/sponsor',
    TREE: 'profile/tree',
    // payment
    DEPOSIT_LIST: 'list-deposit',
    VALIDATE_REFERAL: 'check-code',
    ORDER_LIST: 'admin/orders',
    TRANSACTION_LIST: 'admin/transactions'
};

export {URL, api, authorization};