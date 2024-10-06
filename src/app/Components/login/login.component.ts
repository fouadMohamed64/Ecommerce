import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  isLogged:boolean=false;

  constructor(private userAuthService:UserAuthService){}

  ngOnInit() {
    this.isLogged = this.userAuthService.isLogedIn()
  }
  
  
  login(){
    this.userAuthService.login()
    this.isLogged = this.userAuthService.isLogedIn()
  }
  
  logout(){
    this.userAuthService.logout()
    this.isLogged = this.userAuthService.isLogedIn()
  }
}
