import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: `http://bcastarx.com/cerberus/api/`, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Cookies.get('logedin')}`
  },
});

const URL = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    PROFILE: 'profile',
    CHECK_POSITION: 'check-position',
    UPDATE_PROFILE: 'profile/update',
    UPDATE_PAKET: 'profile/upgrade',
    BONUS_LEVEL: 'bonus/level',
    BONUS_SPONSOR: 'bonus/sponsor',
    // payment
    DEPOSIT_LIST: 'list-deposit',
    VALIDATE_REFERAL: 'check-code',
    ORDER_LIST: 'admin/orders',
    TRANSACTION_LIST: 'admin/transactions'
};

export {URL, api};