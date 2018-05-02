import axios from 'axios';
import {API_ENDPOINT_USER} from '../consts/api';


export default class ApiService {
  constructor(baseUrl){
    this.isLogged = false;
    this.user = null;
    this.request = axios.create({
      baseURL: baseUrl,
      timeout: 1000
    });
  }

  userLogin = () => {
    return this.request.get(API_ENDPOINT_USER)
  }

  getProfile = () => {
    return this.request.get(API_ENDPOINT_USER)
  }

  setUser = (user) => {
    this.user = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    };
    this.isLogged = true;
  }

  unSetUser = () => {
    this.user = null;
    this.isLogged = false;
  }
}

