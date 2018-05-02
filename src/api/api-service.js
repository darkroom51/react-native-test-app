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

  setUser = (loggedUser) => {
    this.user = {
      id: loggedUser.id,
      name: loggedUser.name,
      username: loggedUser.username,
      email: loggedUser.email
    };
    this.isLogged = true;
  }

  unSetUser = () => {
    this.user = null;
    this.isLogged = false;
  }
}

