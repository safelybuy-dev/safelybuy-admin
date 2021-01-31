import * as type from '../actions/bitcoin';

export default function bitcoinReducer(state, action) {
  switch (action.type) {
    case type.GET_BITCOIN_DASHBOARD:
      return {
        ...state,
        loadingDashboard: true,
        dashboardError: '',
      };
    case type.GET_BITCOIN_DASHBOARD_SUCCESS:
      return {
        ...state,
        loadingDashboard: false,
        dashboardError: '',
        dashboard: action.payload,
      };
    case type.GET_BITCOIN_DASHBOARD_FAILURE:
      return {
        ...state,
        loadingDashboard: false,
        dashboardError: action.payload,
      };

    case type.GET_BITCOIN_HISTORY:
      return {
        ...state,
        loadingHistory: true,
        historyError: '',
      };
    case type.GET_BITCOIN_HISTORY_SUCCESS:
      return {
        ...state,
        loadingHistory: false,
        historyError: '',
        history: action.payload,
      };
    case type.GET_BITCOIN_HISTORY_FAILURE:
      return {
        ...state,
        loadingHistory: false,
        historyError: action.payload,
      };

    case type.SET_BITCOIN_RATES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case type.SET_BITCOIN_RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        rates: action.payload,
      };
    case type.SET_BITCOIN_RATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.SET_RECENT_RATES:
      const tempRates = state.recent_rates;
      const lastRate = tempRates[0]?.rate;
      const percentageChange = lastRate
        ? ((action.payload - lastRate) / lastRate) * 100
        : 0;
      if (!lastRate || Date.now() - (tempRates[0]?.time || 0) > 20000) {
        tempRates.unshift({
          rate: action.payload,
          percentage: percentageChange.toFixed(2),
          time: Date.now(),
        });
      }
      tempRates.length = 5;
      return {
        ...state,
        recent_rates: tempRates,
      };

    default:
      return state;
  }
}
