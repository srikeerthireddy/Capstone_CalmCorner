// import axios from 'axios';
// import Cookies from 'js-cookie';

// // Create an instance of axios with default settings
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5226/api', // Base URL for your API
//   withCredentials: false, // To send cookies with requests
// });

// // Interceptor to include the token in headers of all requests
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Get the token from cookies
//     const token = Cookies.get('token');
//     if (token) {
//       // Set the Authorization header if token exists
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
import axios from 'axios';
import Cookies from 'js-cookie';

// Create an instance of axios with default settings
const axiosInstance = axios.create({
  baseURL: 'https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/api', // Base URL for your API
  withCredentials: false, // To send cookies with requests
});

// Interceptor to include the token in headers of all requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from cookies
    const token = Cookies.get('token');
    if (token) {
      // Set the Authorization header if token exists
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
