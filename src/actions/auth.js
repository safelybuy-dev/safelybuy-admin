import { signIn, getUser } from '../api/auth';

export const LOGIN = 'LOGIN';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const GET_USER = 'GET_USER';

export const action = (type, payload) => ({
  type,
  payload,
});

export const login = (dispatch, data, history, toast) => {
  dispatch(action(LOADING));
  signIn(
    (res) => {
      dispatch(action(LOGIN, res.data));
      toast('Welcome back, ' + res.data.user.firstname, {
        appearance: 'success',
        autoDismiss: true,
      });
      localStorage.setItem('safelybuy_admin_token', res.data.token);
      localStorage.setItem('safely_buy_id', res.data.user.id);
      history.push('/shopping');
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
        toast(err.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      } else {
        dispatch(action(ERROR, err.message));
        toast(err.message, { appearance: 'error', autoDismiss: true });
      }
    },
    data
  );
};

export const fetchUser = (dispatch) => {
  dispatch(action(LOADING));
  getUser(
    (res) => {
      dispatch(action(GET_USER, res.data));
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
      } else {
        dispatch(action(ERROR, err.message));
      }
    }
  );
};
