import { observable, action, computed } from 'mobx';

class UserStore {
  @observable hello = 'hello world!'
}

const userStore = new UserStore();
export default userStore;