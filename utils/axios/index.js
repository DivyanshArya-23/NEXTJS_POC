import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

axiosInstance.interceptors.request.use((req) => {
  console.log("Request Received to :" + req.url);
  return req;
});

axiosInstance.interceptors.response.use((res) => {
  console.log("Response Received");
  return res;
});

export default axiosInstance;
