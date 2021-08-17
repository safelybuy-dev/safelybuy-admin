import { axiosWithAuth } from 'auth';
import { baseUrl } from './';

export const getMainDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/shopping`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getDiscountDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/promotions`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getGiftCardDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/trading/giftcard`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getDeliveryDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/delivery`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getTicketsDashboard = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/tickets`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getDeliveryOrders = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/delivery/orders`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingOrders = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/orders`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getShoppingItems = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/items`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getEvents = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/events`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getSellers = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/users/sellers`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getCustomers = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/users/customers`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getUsers = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/users/admins`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const acceptOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/accept/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const denyOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/deny/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const shipOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/ship/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deliverOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/deliver/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const returnOrder = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/orders/return/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const approveItem = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/item/approve/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const denyItem = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/item/deny/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deleteItem = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/item/delete/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const selloutItem = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/item/sellout/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const approveEvent = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/events/approve/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const denyEvent = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/events/deny/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deleteEvent = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/events/delete/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const banUser = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/user/suspend/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const deleteUser = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/user/delete/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const addUser = (success, failure, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/users/add`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const updateGiftcard = (success, failure, id, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/giftcard/update/${id}`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const addGiftcard = (success, failure, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/giftcard/add`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getGiftCardHistory = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/giftcard/history`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const createPromotionCode = (success, failure, data) =>
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/promotion/create`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));

export const getOngoingPromotions = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/promotions/ongoing`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const endPromo = (success, failure, id) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/promotion/end/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getReferrals = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/referrals/all`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const suspendReferrer = (success, failure, id) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/referrer/suspend/${id}`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const addReferralPoint = (success, failure, data) => {
  axiosWithAuth()
    .post(`${baseUrl}/api/v1/admin/referrer/setpoints`, data)
    .then((response) => success(response))
    .catch((error) => failure(error));
};

export const getPointsRedemption = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/admin/referral/redemption`)
    .then((response) => success(response))
    .catch((error) => failure(error));
};
