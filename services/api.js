import axios from 'axios';
const api = axios.create({
  baseURL: `http://164.92.251.112/api/`,
  timeout: 1000,
  headers: {
    'accept': 'application/json',
  },
});

const URL = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    PROFILE: 'profile',
    // payment
    DEPOSIT_LIST: 'list-deposit',
    VALIDATE_REFERAL: 'check-code'
};

export {URL, api};