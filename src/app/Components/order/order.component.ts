import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { Icategory } from '../../Models/icategory';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedOption:number=1;
  categories: Icategory[];
  totalOrderPrice:number=0 

  @ViewChild('userName') inp!:ElementRef
  @ViewChild(ProductsComponent) prdComponent!:ProductsComponent 
  ngAfterViewInit(){ 
    // this.prdComponent.products[2].quintity = 0
    // console.log(this.inp.nativeElement.value)
  }


  constructor(){
    this.categories = [
      {id: 1, name: 'Mobile'},
      {id: 2, name: 'Labtops'},
      {id: 3, name: 'Tablets'},
    ]
  }


  viewTotalPrice(tOP:number){
    this.totalOrderPrice = tOP;
  }

}
