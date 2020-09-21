import axios from "axios";
import store from "../../redux/store";
import * as actions from "../../redux/actions";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

axiosInstance.interceptors.request.use((req) => {
  store.dispatch(actions.showLoader());
  console.log("Request Received \n\n :" + JSON.stringify(req));
  return req;
});

axiosInstance.interceptors.response.use(async (res) => {
  setTimeout(() => {
    store.dispatch(actions.hideLoader());
  }, 5000);
  console.log("Response Received");
  return res;
});

export default axiosInstance;
