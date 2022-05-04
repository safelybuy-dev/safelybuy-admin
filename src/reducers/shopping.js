import * as type from "actions/shopping";

export default function shoppingReducer(state, action) {
  switch (action.type) {
    case type.GET_MAIN_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_MAIN_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        admin: action.payload,
      };
    case type.GET_MAIN_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_GIFTCARD_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_GIFTCARD_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        giftcard: action.payload,
      };
    case type.GET_GIFTCARD_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_TICKETS_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_TICKETS_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        ticketsDashboard: action.payload,
      };
    case type.GET_TICKETS_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_DELIVERY_DASHBOARD:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_DELIVERY_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        deliveryDashboard: action.payload,
      };
    case type.GET_DELIVERY_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_SHOPPING_DASHBOARD:
      return {
        ...state,
        isLoadingDashboard: true,
        dashboardError: "",
      };
    case type.GET_SHOPPING_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoadingDashboard: false,
        dashboardError: "",
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
        itemsError: "",
      };
    case type.GET_SHOPPING_ITEMS_SUCCESS:
      return {
        ...state,
        isLoadingItems: false,
        itemsError: "",
        items: action.payload.items,
      };
    case type.GET_SHOPPING_ITEMS_FAILURE:
      return {
        ...state,
        isLoadingItems: false,
        itemsError: action.payload,
      };

    case type.GET_EVENTS:
      return {
        ...state,
        loadingEvents: true,
        eventsError: "",
      };
    case type.GET_EVENTS_SUCCESS:
      return {
        ...state,
        loadingEvents: false,
        eventsError: "",
        events: action.payload.data,
      };
    case type.GET_EVENTS_FAILURE:
      return {
        ...state,
        loadingEvents: false,
        eventsError: action.payload,
      };

    case type.GET_SHOPPING_ORDERS:
      return {
        ...state,
        isLoadingOrders: true,
        ordersError: "",
      };
    case type.GET_SHOPPING_ORDERS_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        ordersError: "",
        orders: action.payload.orders,
      };
    case type.GET_SHOPPING_ORDERS_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        ordersError: "",
      };

    case type.GET_DELIVERY_ORDERS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_DELIVERY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        deliveryOrders: action.payload.orders,
        error: "",
      };
    case type.GET_DELIVERY_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_SELLERS:
      return {
        ...state,
        isLoadingSellers: true,
        sellersError: "",
      };
    case type.GET_SELLERS_SUCCESS:
      const sellerObject = {};
      action.payload.users.forEach((e) => {
        sellerObject[e.id] = e;
      });
      return {
        ...state,
        isLoadingSellers: false,
        sellersError: "",
        sellers: sellerObject,
        sellersArray: action.payload.users,
      };
    case type.GET_SELLERS_FAILURE:
      return {
        ...state,
        isLoadingSellers: false,
        sellersError: action.payload,
      };

    case type.GET_CUSTOMERS:
      return {
        ...state,
        isLoadingCustomers: true,
        customersError: "",
      };
    case type.GET_CUSTOMERS_SUCCESS:
      const customerObject = {};
      action.payload.users.forEach((e) => {
        customerObject[e.id] = e;
      });
      return {
        ...state,
        isLoadingCustomers: false,
        customersError: "",
        customers: customerObject,
        customersArray: action.payload.users,
      };
    case type.GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        isLoadingCustomers: false,
        customersError: action.payload,
      };

    case type.GET_USERS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case type.GET_USERS_SUCCESS:
      const usersObject = {};
      action.payload.users.forEach((e) => {
        usersObject[e.id] = e;
      });
      return {
        ...state,
        loading: false,
        error: "",
        users: usersObject,
        usersArray: action.payload.users,
      };
    case type.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.ACCEPT_ORDER:
      return {
        ...state,
        isLoadingOrders: true,
        orderActionError: "",
      };
    case type.ACCEPT_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: "",
        // orders: state.orders.map(e => e)
      };
    case type.ACCEPT_ORDER_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: action.payload,
      };

    case type.DENY_ORDER:
      return {
        ...state,
        isLoadingOrders: true,
        orderActionError: "",
      };
    case type.DENY_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: "",
        // orders: state.orders.map(e => e)
      };
    case type.DENY_ORDER_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: action.payload,
      };

    case type.SHIP_ORDER:
      return {
        ...state,
        isLoadingOrders: true,
        orderActionError: "",
      };
    case type.SHIP_ORDER_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: action.payload,
      };
    case type.SHIP_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: "",
        // orders: state.orders.map(e => e)
      };

    case type.DELIVER_ORDER:
      return {
        ...state,
        isLoadingOrders: true,
        orderActionError: "",
      };
    case type.DELIVER_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: "",
        // orders: state.orders.map(e => e)
      };
    case type.DELIVER_ORDER_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: action.payload,
      };

    case type.RETURN_ORDER:
      return {
        ...state,
        isLoadingOrders: true,
        orderActionError: "",
      };
    case type.RETURN_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: "",
        // orders: state.orders.map(e => e)
      };
    case type.RETURN_ORDER_FAILURE:
      return {
        ...state,
        isLoadingOrders: false,
        orderActionError: action.payload,
      };

    case type.APPROVE_ITEM:
    case type.DENY_ITEM:
    case type.DELETE_ITEM:
    case type.SELLOUT_ITEM:
      return {
        ...state,
        isLoadingItems: true,
        itemActionError: "",
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
        itemActionError: "",
        // items: items.map(item => item)
      };
    case type.SUSPEND_USER:
    case type.DELETE_USER:
      return {
        ...state,
        isLoadingCustomers: true,
        isLoadingSellers: true,
        loading: true,
        customersError: "",
        sellersError: "",
      };

    case type.SUSPEND_USER_FAILURE:
    case type.DELETE_USER_FAILURE:
      return {
        ...state,
        isLoadingCustomers: false,
        isLoadingSellers: false,
        loading: false,
        error: action.payload,
        customersError: action.payload,
        sellersError: action.payload,
      };

    case type.SUSPEND_USER_SUCCESS:
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoadingCustomers: false,
        isLoadingSellers: false,
        loading: false,
        error: "",
        customersError: "",
        sellersError: "",
      };

    case type.GET_RESTUARANTS:
      return {
        ...state,
        loadingRestuarants: true,
      };
    case type.GET_RESTUARANTS_SUCCESS:
      return {
        ...state,
        restuarants: action.payload,
        restuarantsError: "",
        loadingRestuarants: false,
      };
    case type.GET_RESTUARANTS_FAILURE:
      return {
        ...state,
        restuarantsError: action.payload,
        restuarants: [],
        loadingRestuarants: false,
      };

    case type.GET_MENUS:
      return {
        ...state,
        loadingMenus: true,
      };
    case type.GET_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.payload,
        menusError: "",
        loadingMenus: false,
      };
    case type.GET_MENUS_FAILURE:
      return {
        ...state,
        menusError: action.payload,
        menus: [],
        loadingMenus: false,
      };
    case type.GET_FOOD_ORDERS:
      return {
        ...state,
        loadingFoodOrders: true,
      };

    case type.GET_FOOD_ORDERS_SUCCESS:
      return {
        ...state,
        foodOrders: action.payload,
        foodOrdersError: "",
        loadingFoodOrders: false,
      };

    case type.GET_FOOD_ORDERS_FAILURE:
      return {
        ...state,
        foodOrdersError: action.payload,
        foodOrders: {},
        loadingFoodOrders: false,
      };

    case type.GET_MEAL_PLAN:
      return {
        ...state,
        loadingMealPlan: true,
      };

    case type.GET_MEAL_PLAN_SUCCESS:
      return {
        ...state,
        mealPlan: action.payload,
        loadingMealPlan: false,
        mealPlanError: "",
      };

    case type.GET_MEAL_PLAN_FAILURE:
      return {
        ...state,
        mealPlanError: action.payload,
        mealPlan: {},
        loadingMealPlan: false,
      };

    case type.GET_MEAL_PLAN_ORDERS:
      return {
        ...state,
        loadingMealPlanOrders: true,
      };

    case type.GET_MEAL_PLAN_ORDERS_SUCCESS:
      return {
        ...state,
        mealPlanOrders: action.payload,
        loadingMealPlanOrders: false,
        mealPlanOrdersError: "",
      };

    case type.GET_MEAL_PLAN_ORDERS_FAILURE:
      return {
        ...state,
        mealPlanOrdersError: action.payload,
        mealPlanOrders: {},
        loadingMealPlanOrders: false,
      };

    case type.GET_MEAL_PLAN_EXTRAS:
      return {
        ...state,
        loadingMealPlanExtras: true,
      };

    case type.GET_MEAL_PLAN_EXTRAS_SUCCESS:
      return {
        ...state,
        mealPlanExtras: action.payload,
        mealPlanExtrasError: "",
        loadingMealPlanExtras: false,
      };

    case type.GET_MEAL_PLAN_EXTRAS_FAILURE:
      return {
        ...state,
        mealPlanExtras: [],
        mealPlanExtrasError: action.payload,
        loadingMealPlanExtras: false,
      };

    default:
      return state;
  }
}
