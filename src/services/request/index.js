import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";

class HYRequest {
  constructor(baseURL,timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    // 相应拦截器→对获取到的数据进行处理
    this.instance.interceptors.response.use(res => {
      // 去掉外面包的那一层data
      return res.data
    },error => {
      return Promise.reject(error)
    })
  }


  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config,method:'get'})
  }

  post(config) {
    return this.request({...config,method:'post'})
  }
}

const requestInstance = new HYRequest(BASE_URL, TIMEOUT);
export default requestInstance