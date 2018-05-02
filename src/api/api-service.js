import axios from 'axios';

export default class ApiService {
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
