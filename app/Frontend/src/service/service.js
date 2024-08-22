// src/services/axiosService.js

const BASE_URL = import.meta.env.VITE__APP_API_BASE_URL;
// // Create an Axios instance
// const axiosInstance = axios.create({
//   baseURL: BASE_URL || "http://localhost:8000/api", // Base URL for API requests
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to include auth tokens or modify requests
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // For example, add an Authorization header if needed
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to handle responses or errors
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle errors globally, for example:
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized access
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

export default BASE_URL;
