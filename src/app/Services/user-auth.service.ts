import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLogedStatus:BehaviorSubject<boolean>

  constructor() {
    this.isLogedStatus = new BehaviorSubject<boolean>(this.isLogedIn())
  }

  login(){
    let token = 'fdjfkdjfk'
    localStorage.setItem('token', token)
    this.isLogedStatus.next(true)
  }
  
  logout(){
    localStorage.removeItem('token')
    this.isLogedStatus.next(false)
  }

  isLogedIn():boolean{
    return localStorage.getItem('token')? true:false;
  }

  getLogedStatus():BehaviorSubject<boolean>{
    return this.isLogedStatus
  }
}
