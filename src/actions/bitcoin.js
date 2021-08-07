import {
  getBitcoinDashboard,
  getBitcoinHistory,
  setBitcoinRates,
} from 'api/bitcoin';

export const GET_BITCOIN_DASHBOARD = 'GET_BITCOIN_DASHBOARD';
export const GET_BITCOIN_DASHBOARD_SUCCESS = 'GET_BITCOIN_DASHBOARD_SUCCESS';
export const GET_BITCOIN_DASHBOARD_FAILURE = 'GET_BITCOIN_DASHBOARD_FAILURE';

export const GET_BITCOIN_HISTORY = 'GET_BITCOIN_HISTORY';
export const GET_BITCOIN_HISTORY_SUCCESS = 'GET_BITCOIN_HISTORY_SUCCESS';
export const GET_BITCOIN_HISTORY_FAILURE = 'GET_BITCOIN_HISTORY_FAILURE';

export const SET_BITCOIN_RATES = 'SET_BITCOIN_RATES';
export const SET_BITCOIN_RATES_SUCCESS = 'SET_BITCOIN_RATES_SUCCESS';
export const SET_BITCOIN_RATES_FAILURE = 'SET_BITCOIN_RATES_FAILURE';

export const SET_RECENT_RATES = 'SET_RECENT_RATES';

export const action = (type, payload) => ({
  type,
  payload,
});

export const fetchBitcoinDashboard = (dispatch) => {
  dispatch(action(GET_BITCOIN_DASHBOARD));
  getBitcoinDashboard(
    (res) => {
      dispatch(action(GET_BITCOIN_DASHBOARD_SUCCESS, res.data));
      dispatch(action(SET_RECENT_RATES, res.data.rate));
    },
    (err) => {
      dispatch(action(GET_BITCOIN_DASHBOARD_FAILURE, err.response));
    }
  );
};

export const fetchBitcoinHistory = (dispatch) => {
  dispatch(action(GET_BITCOIN_HISTORY));
  getBitcoinHistory(
    (res) => {
      dispatch(action(GET_BITCOIN_HISTORY_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(GET_BITCOIN_HISTORY_FAILURE, err.response));
    }
  );
};

export const postBitcoinRates = (dispatch, data) => {
  dispatch(action(SET_BITCOIN_RATES));
  setBitcoinRates(
    (res) => {
      dispatch(action(SET_BITCOIN_RATES_SUCCESS, res.data));
    },
    (err) => {
      dispatch(action(SET_BITCOIN_RATES_FAILURE, err.response));
    },
    data
  );
};
