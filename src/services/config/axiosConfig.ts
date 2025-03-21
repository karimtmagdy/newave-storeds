import axios, {
  AxiosResponse,
  AxiosInstance,
  AxiosError,
  isAxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import axiosRetry from "axios-retry";

// Set the base URL based on environment
// axios.defaults.baseURL =
//   import.meta.env.MODE === "development"
//     ? (import.meta.env.VITE_API_URL as string)
//     : (import.meta.env.VITE_API_URL_LOCAL as string);

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  cancelToken: axios.CancelToken.source().token,
  withCredentials: false, // This will send cookies with requests
  timeout: 10000,
});

axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
});
// Request interceptor - adds auth token to requests
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token") || localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor - handles errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // if (error.response) {
    if (isAxiosError(error.response) && error.request) {
      console.error("خطاء في الاستجابة:", error.response.data);
    } else if (error.request) {
      console.error("خطاء في الطلب:", error.request);
    } else if (error.code === "ERR_NETWORK") {
      console.log("حدثت مشكلة في الشبكة، يرجى التحقق من اتصالك بالإنترنت");
    } else {
      console.error("خطاء:", error.message);
    }
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export default api;
