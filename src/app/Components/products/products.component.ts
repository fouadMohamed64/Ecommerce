import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaticProductsService } from '../../Services/static-products.service';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnChanges, OnInit{
  products:Iproduct[] = [] as Iproduct[];
  filteredProducts:Iproduct[];
  totalOrderPrice: number = 0;
  // selectedOption:number = 1;
  todayDate:Date = new Date();
  @Input() recievedSelectedCatID:number = 1;
  @Output() onTotalPriceChanged:EventEmitter<number>

  constructor(private prdService: StaticProductsService, private apiService: ApiService ,private router:Router){ 
    // this.products = this.prdService.products
    this.filteredProducts = this.products;
    this.onTotalPriceChanged = new EventEmitter<number>()
  }
  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data)=>{
      this.products = data
      this.filteredProducts = this.products;
    })
  }
  ngOnChanges(){
    // this.filterProducts()
    // this.filteredProducts = this.prdService.getProductsByCatID(this.recievedSelectedCatID)
    this.apiService.getProductsByCatID(this.recievedSelectedCatID).subscribe((data)=>{
      this.filteredProducts = data
      // console.log(data)
    })
  }


  buy(inpValue: string, prdPrice:number){
    this.totalOrderPrice += +inpValue * prdPrice;
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
  }

  // filterProducts(){
  //   this.filteredProducts = this.products.filter((prd) => prd.catID == this.recievedSelectedCatID)
  // }

  showDetails(id:number){
    // this.router.navigateByUrl(`/details/${id}`)
    this.router.navigate(['/details', id])
  }
}
