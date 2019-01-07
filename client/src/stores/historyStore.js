import { observable, action } from 'mobx';

export class historyStore {
  @observable previousUrl = document.location.pathname;

  @action setPrevUrl(url) {
    this.previousUrl = url;
  }

  getPrevUrl() {
    return this.previousUrl;
  }

}

export default new historyStore();

