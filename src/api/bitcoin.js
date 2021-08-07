import { axiosWithAuth } from 'auth';
import { baseUrl } from './';

export const getBitcoinDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/trading/bitcoin`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getBitcoinHistory = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/bitcoin/history`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const setBitcoinRates = (success, failure, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/bitcoin/setrates`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));
};
