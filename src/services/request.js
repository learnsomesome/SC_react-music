import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.responce) {
      switch (err.responce.status) {
        case 400:
          err.message = "请求错误";
          break;
        case 401:
          err.message = "未授权的访问";
          break;
        default:
          err.message = "其他错误信息";
      }
    }
    return err;
  }
);

export default instance;
