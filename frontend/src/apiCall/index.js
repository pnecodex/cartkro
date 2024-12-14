import axios from 'axios';

const composeToken = (token) => token ? { Authorization: `Bearer ${token}` } : {};
const apiCall = (url, method, body = {}, token = '') => axios({
  method,
  url: `http://localhost:4244/api${url}`,
  data: body,
  headers: {
    ...composeToken(token),
    // 'authorization': `Bearer ${token}`
   
  }
});

export default apiCall;