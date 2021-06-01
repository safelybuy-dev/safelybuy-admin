import * as type from '../actions/shopping';

export default function shoppingReducer(state, action) {
  switch (action.type) {
    case type.GET_MAIN_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case type.GET_MAIN_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        admin: action.payload,
      };
    case type.GET_MAIN_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_SHOPPING_DASHBOARD:
      return {
        ...state,
        isLoadingDashboard: true,
        dashboardError: '',
      };
    case type.GET_SHOPPING_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoadingDashboard: false,
        dashboardError: '',
        dashboard: action.payload,
      };
    case type.GET_SHOPPING_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoadingDashboard: false,
        dashboardError: action.payload,
      };

    case type.GET_SHOPPING_ITEMS:
      return {
        ...state,
        isLoadingItems: true,
        itemsError: '',
      };
    case type.GET_SHOPPING_ITEMS_SUCCESS:
      return {
        ...state,
        isLoadingItems: false,
        itemsError: '',
        items: action.payload.items,
      };
    case type.GET_SHOPPING_ITEMS_FAILURE:
      return {
        ...state,
        isLoadingItems: false,
        itemsError: action.payload,
      };

    case type.GET_SHOPPING_ORDERS:
      return {
        ...state,
        isLoadingOrders: true,
        ordersError: '',
      };
    case type.GET_SHOPPING_ORDERS_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        ordersError: '',
      };
    case type.GET_SHOPPING_ORDERS_FAILURE:
      return {
        ...state,
        isLoadingOrders: true,
        ordersError: '',
      };

    case type.GET_SELLERS:
      return {
        ...state,
        isLoadingSellers: true,
        sellersError: '',
      };
    case type.GET_SELLERS_SUCCESS:
      const sellerObject = {};
      action.payload.users.forEach((e) => {
        sellerObject[e.id] = e;
      });
      return {
        ...state,
        isLoadingSellers: false,
        sellersError: '',
        sellers: sellerObject,
      };
    case type.GET_SELLERS_FAILURE:
      return {
        ...state,
        isLoadingSellers: false,
        sellersError: action.payload,
      };

    case type.ACCEPT_ORDER:
      return {
        ...state,
        orderActionLoading: true,
        orderActionError: '',
      };
    case type.ACCEPT_ORDER_SUCCESS:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: '',
        // orders: state.orders.map(e => e)
      };
    case type.ACCEPT_ORDER_FAILURE:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: action.payload,
      };

    case type.DENY_ORDER:
      return {
        ...state,
        orderActionLoading: true,
        orderActionError: '',
      };
    case type.DENY_ORDER_SUCCESS:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: '',
        // orders: state.orders.map(e => e)
      };
    case type.DENY_ORDER_FAILURE:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: action.payload,
      };

    case type.SHIP_ORDER:
      return {
        ...state,
        orderActionLoading: true,
        orderActionError: '',
      };
    case type.SHIP_ORDER_FAILURE:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: action.payload,
      };
    case type.SHIP_ORDER_SUCCESS:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: '',
        // orders: state.orders.map(e => e)
      };

    case type.DELIVER_ORDER:
      return {
        ...state,
        orderActionLoading: true,
        orderActionError: '',
      };
    case type.DELIVER_ORDER_SUCCESS:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: '',
        // orders: state.orders.map(e => e)
      };
    case type.DELIVER_ORDER_FAILURE:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: action.payload,
      };

    case type.RETURN_ORDER:
      return {
        ...state,
        orderActionLoading: true,
        orderActionError: '',
      };
    case type.RETURN_ORDER_SUCCESS:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: '',
        // orders: state.orders.map(e => e)
      };
    case type.RETURN_ORDER_FAILURE:
      return {
        ...state,
        orderActionLoading: false,
        orderActionError: action.payload,
      };

    case type.APPROVE_ITEM:
    case type.DENY_ITEM:
    case type.DELETE_ITEM:
    case type.SELLOUT_ITEM:
      return {
        ...state,
        isLoadingItems: true,
        itemActionError: '',
      };

    case type.APPROVE_ITEM_FAILURE:
    case type.DENY_ITEM_FAILURE:
    case type.DELETE_ITEM_FAILURE:
    case type.SELLOUT_ITEM_FAILURE:
      return {
        ...state,
        isLoadingItems: false,
        itemActionError: action.payload,
      };

    case type.APPROVE_ITEM_SUCCESS:
    case type.DENY_ITEM_SUCCESS:
    case type.DELETE_ITEM_SUCCESS:
    case type.SELLOUT_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingItems: false,
        itemActionError: '',
        // items: items.map(item => item)
      };

    default:
      return state;
  }
}
