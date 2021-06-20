import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const Auth = {
  isAuthenticated() {
    const token = localStorage.safelybuy_admin_token;
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
    localStorage.removeItem('safelybuy_admin_token');
    cb();
  },
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem('safelybuy_admin_token');

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default Auth;
