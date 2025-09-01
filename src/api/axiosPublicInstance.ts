import axios, { type AxiosInstance } from "axios";

// 1. Define your API base URL and any other common configurations
// const BASE_URL = "https://coffee-server-lyart.vercel.app";
const BASE_URL = "http://localhost:5000";

const axiosPublicInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default axiosPublicInstance;
