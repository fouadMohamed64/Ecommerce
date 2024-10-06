import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoromotionAddsService } from '../../Services/poromotion-adds.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit , OnDestroy{

  subscribtionAds!:Subscription

  constructor(private poromotionAddsService:PoromotionAddsService){}
  ngOnInit() {
    this.subscribtionAds = this.poromotionAddsService.getAdds().subscribe({
      next: (data)=>console.log(data),
      error: (err)=> console.log('error'),
      complete: ()=> console.log('completed')
      
    })
  }
  ngOnDestroy() {
    this.subscribtionAds.unsubscribe()
  }
}
