import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements  OnInit{

  isLoged:boolean=false;

  constructor(private userAuthService:UserAuthService){}
  
  ngOnInit() {
    this.userAuthService.getLogedStatus().subscribe((status)=>{
      this.isLoged = status;
    })
  }



}
