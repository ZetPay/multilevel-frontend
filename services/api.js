import axios from 'axios';
import Cookies from 'js-cookie';
const api = axios.create({
  baseURL: `https://cerberus.cikupalearningcenter.com/api/`,
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
    // payment
    DEPOSIT_LIST: 'list-deposit',
    VALIDATE_REFERAL: 'check-code'
};

export {URL, api};