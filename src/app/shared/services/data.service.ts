import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userKey = "user"

  isNotNull(param) {
    return param !== undefined && param !== null && param !== "";
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  isSelected() {
    return this.isNotNull(this.getCurrentUser().id)
  }
  getCurrentUser() {
    return this.isNotNull(JSON.parse(localStorage.getItem(this.userKey))) ?
      JSON.parse(localStorage.getItem(this.userKey)) : {};
  }

  setCurrentUser(pCurentUser) {
    localStorage.setItem(this.userKey, JSON.stringify(pCurentUser));
  }
}
