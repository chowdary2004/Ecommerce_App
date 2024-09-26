import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Adjust to your backend URL
});

export default axiosInstance;
