import * as type from "../actions/auth";

export default function userReducer(state, action) {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loadingUser: true,
        error: "",
      };
    case type.LOGIN:
      return {
        ...state,
        loadingUser: false,
        error: "",
        user: action.payload.user,
        token: action.payload.token,
      };
    case type.GET_USER:
      return {
        ...state,
        loadingUser: false,
        error: "",
        user: action.payload.data,
      };
    case type.ERROR:
      return {
        ...state,
        loadingUser: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
