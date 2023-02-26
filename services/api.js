import axios from 'axios';

export const userAgentList = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2 rv:6.0; sl-SI) AppleWebKit/535.2.7 (KHTML, like Gecko) Version/4.1 Safari/535.2.7',
  'Mozilla/5.0 (Windows 95) AppleWebKit/5332 (KHTML, like Gecko) Chrome/37.0.897.0 Mobile Safari/5332',
  'Mozilla/5.0 (Windows 98; Win 9x 4.90) AppleWebKit/5352 (KHTML, like Gecko) Chrome/40.0.825.0 Mobile Safari/5352',
]

const api = axios.create({
  baseURL: `http://164.92.251.112/api/`,
  timeout: 1000,
  headers: {
    'User-Agent': userAgentList[Math.floor(Math.random() * userAgentList.length)],
    'accept': 'application/json',
  },
});

const URL = {
    LOGIN: 'sign-in',
    REGISTER: 'auth/register',
    PROFILE: 'profile',
    // payment
    DEPOSIT_LIST: 'list-deposit'
};

export {URL, api};