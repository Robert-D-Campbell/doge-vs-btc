import axios from "axios";

const apiClient = axios.create({
  baseUrl: process.env.VUE_APP_CRYPTO_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getBtcData() {
    return apiClient.get(
      `?key=${process.env.VUE_APP_CRYPTO_API_KEY}&ids=BTC,DOGE`
    );
  },
};
