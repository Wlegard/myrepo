import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// REQUEST interceptor (attach token if you use one later)
api.interceptors.request.use((config) => {
  // Example if using JWT later:
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// RESPONSE interceptor (handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);

    // Example: auto logout if unauthorized
    if (error.response?.status === 401) {
      console.log("Unauthorized - redirecting...");
    }

    return Promise.reject(error);
  }
);

export default api;