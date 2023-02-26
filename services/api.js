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
  },
});

const URL = {
    LOGIN: 'sign-in',
    PROFILE: 'profile',
    VERIFICATION: 'verification',
    CREATE_PIN: 'create-pin',
    VERIF_PIN: 'check-pin',
    FORGOT_PIN: 'forgot-pin',
    CODE_RESET_PIN: 'code-reset-pin',
    RESET_PIN: 'reset-pin',
    UPLOAD_AVATAR: 'json',
    UPDATE_PROFILE: 'profile/update',
    ANNOUNCEMENT_ALL: 'announcements',
    ANNOUNCEMENT_INDIVIDU: 'announcements/individual',
    CHECK_BILL: 'transaction/check-bill',
    PRABAYAR: 'transaction/prabayar',
    PASCABAYAR: 'transaction/pascabayar',
    // serpul fetch
    PAYMENT_LIST: 'topup',
    DEPOSIT: 'topup',
    STATUS_DEPOSIT: 'topup/status',
    GET_PRABAYAR_OPRATOR: 'prabayar/operator',
    GET_PRABAYAR_OPRATOR_PRODUCT: 'prabayar/product',
    GET_PASCABAYAR_CATEGORY: 'pascabayar/category',
    GET_PASCABAYAR_PRODUCT: 'pascabayar/product',
    CHECK_ID_PELANGGAN_PLN: 'checkplnprepaid',
    CHECK_PASCABAYAR_BILL: 'pascabayar/check',
    HISTORY_TOPUP: 'topup/history',
    CHECK_ID_GAMES: 'initPayment.action',
  };

export {URL, api};