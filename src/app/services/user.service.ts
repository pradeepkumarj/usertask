
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FrontEndConfig } from '../frontendConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private frontEndConfig: FrontEndConfig) { }
  serverUrl = this.frontEndConfig.getServerUrl();

  /* for getting current logged in user data from local storage*/
  getUser() {
    const authUser: any = this.getLocalStorage('currentUser');
    let authTokenUser = JSON.parse(authUser);
    return authTokenUser.user;
  }

  /**
   * Gets local stoarge
   * @param key //
   * @returns   local storage values acording to key
   */
  getLocalStorage(key: string) {
    return window.localStorage.getItem(key);
  }

  /**
   * @param user login data json
   * @output To sign in the user
   */
  logInUser(params) {
    return this.http.post(this.serverUrl + '/auth/local', params);
  }

  /**
   * @param user registration data json
   * @output To sign up the user
   */
  signUpUser(params) {
    return this.http.post(this.serverUrl + '/api/users/save/user',params);
  }

  /**
   * @param task data json
   * @output To add task in the db
   */
  addTask(params){
    return this.http.post(this.serverUrl + '/api/tasks',params);
  }

  /**
   * @param task data json
   * @output To edit task in the db
   */
  editTask(params){
    return this.http.post(this.serverUrl + '/api/tasks/updatetask',params);
  }
  
  /**
   * @param nill
   * @output To get task list from the db
   */
  getTaskLists() {
    return this.http.get(this.serverUrl + '/api/tasks/getTask');
  }

    /**
   * @param nill
   * @output To get expired task list from the db
   */
  getExpiredTaskLists() {
    return this.http.get(this.serverUrl + '/api/tasks/getexpiredTask');
  }
  
  /**
   * @param id
   * @output To delete task from the db
   */
  deleteTask(id) {
    return this.http.delete(this.serverUrl + '/api/tasks/' + id);
  }

  /**
   * @output To logout session
   */
  logout() {
    const userToken = { token: null };
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('currentUser', JSON.stringify(userToken));
    this.router.navigate(['/']);
  }

}
