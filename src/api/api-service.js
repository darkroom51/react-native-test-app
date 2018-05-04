import axios from 'axios';
import {API_ENDPOINT_USER} from '../consts/api';
import {api} from "../../App";


export default class ApiService {
  constructor(baseUrl){
    this.isLogged = false;
    this.user = null;
    this.request = axios.create({
      baseURL: baseUrl,
      timeout: 1000
    });
  }


  userLogin = (email, password) => {
    return this.request.get(API_ENDPOINT_USER)
      .then(response => {
        if(response.status === 200) {
          if(response.data && response.data.id && response.data.name && response.data.email && response.data.username) {
            api.setUser(response.data);
          } else {
            throw new Error('Invalid user data in server response');
          }
        }
      })
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

