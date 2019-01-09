import { decorate, observable, action } from 'mobx';

export class historyStore {
  // @observable previousUrl;
  previousUrl;

  constructor(initialUrl = "/") {
    this.previousUrl = initialUrl;
  }

  // @action setPrevUrl(url) {
  setPrevUrl(url) {
    this.previousUrl = url;
  }

  getPrevUrl() {
    return this.previousUrl;
  }

}

decorate(historyStore, {
  previousUrl: observable,
  setPrevUrl: action,
});


export default historyStore;

