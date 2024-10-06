import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoromotionAddsService {

  adds:string[];
  constructor() { 
    this.adds = [
      'white friday',
      'black friday',
      '',
      'blue friday',
    ]
  }

  getAdds(){
    return new Observable<string>((observer)=>{
      let i=0;
      let interval = setInterval(() => {
        console.log('interval running...');
        if(i == this.adds.length){
          observer.complete()
        }
        // if(this.adds[i]==''){
        //   observer.error()
        // }
        observer.next(this.adds[i]);
        i++;
      }, 2000);

      return {
        unsubscribe(){
          clearInterval(interval)
        }
      }
    })
  }

  // getNewAds(){
  //   return  from(this.adds)
  // }
}
