import axios from 'axios';
import {get} from "local-storage";

const authorization = axios.create({
  baseURL: `http://bcastarx.com/dev/api/`, 
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

const api = axios.create({
  baseURL: `http://bcastarx.com/dev/api/`, 
  timeout: 60000,
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
    MEMBER_LIST: 'profile/members',
    MEMBER_BLOCK_LIST: 'profile/members/inactive',
    UPDATE_PROFILE: 'profile/update',
    UPDATE_PAKET: 'profile/upgrade',
    HISTORY_ORDER: 'profile/history/orders',
    BONUS_LEVEL: 'bonus/level',
    BONUS_SPONSOR: 'bonus/sponsor',
    BONUS_PAIRING: 'bonus/pairing',
    TREE: 'profile/tree',
    // payment
    DEPOSIT_LIST: 'list-package',
    VALIDATE_REFERAL: 'check-code',
    ORDER_LIST: 'admin/orders',
    TRANSACTION_LIST: 'admin/transactions',
    APPROVE_TRANSACTION: 'webhook'
};

export {URL, api, authorization};