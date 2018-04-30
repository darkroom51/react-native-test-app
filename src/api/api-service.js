import axios from 'axios';

export default class ApiService {
  constructor(baseUrl){
    this.baseUrl = baseUrl;
    this.request = axios.create({
      baseURL: this.baseUrl,
      timeout: 1000
    });
  }

  getOneUser = () => {
    return this.request.get(this.baseUrl+'/users/1')
  }
  getAllUsers = () => {
    this.request.get(this.baseUrl)
  }
}
