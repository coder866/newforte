import axios from './index'

export default {
  login (userData) {
      let data = {
          grant_type: 'password',
          client_id: import.meta.env.VITE_API_CLIENT_ID,
          client_secret: import.meta.env.VITE_API_CLIENT_SECRET,
          username: userData.email,
          password: userData.password
      }
      console.log(data);
    return axios.post(import.meta.env.VITE_SENTRY_DSN_API+'oauth/token', data)
  },
  register (userData) {
    return axios.post(import.meta.env.VITE_SENTRY_DSN_API+'api/register', userData)
  },
  jwtLogin (userData) {
    return axios.post(import.meta.env.VITE_SENTRY_DSN_API+'api/auth/login', userData)
  },
  jwtRegister (userData) {
    return axios.post(import.meta.env.VITE_SENTRY_DSN_API+'api/auth/register', userData)
  }
}
