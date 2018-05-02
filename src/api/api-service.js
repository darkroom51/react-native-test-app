import axios from 'axios';
import {JSON_PLACE_URL} from '../consts/api';


class ApiService {
  constructor(baseUrl){
    this.request = axios.create({
      baseURL: baseUrl,
      timeout: 1000
    });
  }

  userLogin = () => {
    return this.request.get('/users/1')
  }

  getProfile = () => {
    return this.request.get('/users/1')
  }
}


export const api = new ApiService(JSON_PLACE_URL);
