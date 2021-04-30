import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_CRYPTO_API_URL,
  withCredentials: false,
});
export default {
  getDogeData() {
    return apiClient.get(
      `/currencies/ticker?key=${process.env.VUE_APP_CRYPTO_API_KEY}&ids=DOGE`
    );
  },
};
