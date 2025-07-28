import axios, { type AxiosInstance } from "axios";

// 1. Define your API base URL and any other common configurations
const BASE_URL = "https://api.example.com";

// 2. Create the Axios instance
const axiosSecureInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// 5. Export the instance for use throughout your application
export default axiosSecureInstance;
