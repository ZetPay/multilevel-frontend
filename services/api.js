import axios from 'axios';
import Cookies from 'js-cookie';
const api = axios.create({
  baseURL: `http://164.92.251.112/api/`,
  timeout: 1000,
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${Cookies.get('logedin')}`
  },
});

const URL = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    PROFILE: 'profile',
    CHECK_POSITION: 'check-position',
    // payment
    DEPOSIT_LIST: 'list-deposit',
    VALIDATE_REFERAL: 'check-code'
};

export {URL, api};