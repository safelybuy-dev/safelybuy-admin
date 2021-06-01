import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const Auth = {
  isAuthenticated() {
    const token = localStorage.safely_buy_token;
    if (!token) return false;
    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      decoded = false;
    }
    if (
      !decoded ||
      !decoded.aud ||
      !decoded.jti ||
      !decoded.iat ||
      !decoded.exp ||
      !decoded.sub
    )
      return false;
    return decoded.exp > Date.now() / 1000 ? true : false;
  },
  signout(cb) {
    localStorage.removeItem('safely_buy_token');
    cb();
  },
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem('safely_buy_token');

  return axios.create({
    // withCredentials: false,
    headers: {
      // 'Access-Control-Allow-Headers':
      //   'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type, x-xsrf-token',
      // 'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  });
};

export default Auth;
