// utils/axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Define a base URL for your API
const baseURL = 'https://api.example.com';

// Create an Axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Timeout after 5 seconds
});

// Type guard to check if headers are defined
function isAxiosRequestConfig(config: any): config is AxiosRequestConfig {
  return config && config.headers !== undefined;
}

// Request interceptor for adding authorization token
axiosInstance.interceptors.request.use(
  // async (config: any) => {
  //   if (isAxiosRequestConfig(config)) {
  //     const token = localStorage.getItem('token');
  //     console.log(token)
  //     if (token) {
  //       config.headers = {
  //         ...config.headers,
  //         Authorization: `Bearer ${token}`,
  //       };
  //     }
  //   }
  //   return config;
  // },
  // (error: AxiosError) => {
  //   return Promise.reject(error);
  // }
);

// Response interceptor to handle unauthorized responses
axiosInstance.interceptors.response.use(
  // (response: AxiosResponse) => {
  //   return response;
  // },
  // (error: AxiosError) => {
  //   if (error.response && error.response.status === 401) {
  //     // Handle 401 Unauthorized error here (e.g., redirect to login page)
  //     console.log('Unauthorized request. Redirecting to login.');
  //   }
  //   return Promise.reject(error);
  // }
);

export default axiosInstance;
