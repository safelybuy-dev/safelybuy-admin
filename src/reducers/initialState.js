export const shopping = {
  orders: [],
  isLoadingOrders: false,
  ordersError: "",

  items: [],
  isLoadingItems: false,
  itemsError: "",

  sellers: {},
  isLoadingSellers: false,
  sellersError: "",
  sellersArray: [],

  customers: {},
  customersArray: [],
  isLoadingCustomers: false,
  customersError: "",

  users: {},
  usersArray: [],

  dashboard: {},
  isLoadingDashboard: false,
  dashboardError: "",

  admin: {},
  loading: false,
  error: "",

  orderActionLoading: false,
  orderActionError: "",

  itemActionLoading: false,
  itemActionError: "",

  deliveryDashboard: {},
  deliveryOrders: [],

  giftcard: {},

  ticketsDashboard: {},

  events: [],
  loadingEvents: false,
  eventsError: "",

  restuarants: [],
  loadingRestuarants: false,
  restuarantsError: "",

  menus: [],
  loadingMenus: false,
  menusError: "",

  foodOrders: {},
  loadingFoodOrders: false,
  foodOrdersError: "",

  mealPlan: {},
  loadingMealPlan: false,
  mealPlanError: "",

  mealPlanOrders: {},
  loadingMealPlanOrders: false,
  mealPlanOrdersError: "",

  mealPlanExtras: [],
  loadingMealPlanExtras: false,
  mealPlanExtrasError: "",
};

export const bitcoin = {
  history: [],
  loadingHistory: false,
  historyError: "",

  dashboard: {},
  loadingDashboard: false,
  dashboardError: "",

  rates: {},
  loading: false,
  error: "",

  recent_rates: [],
};

export const auth = {
  user: {},
  token: "",
  loadingUser: false,
  error: "",
};
