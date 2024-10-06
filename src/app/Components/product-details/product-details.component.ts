import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../Services/static-products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  productID:number = 0
  product:Iproduct|null=null
  productsIDs!:number[]
  constructor(private activatedRoute: ActivatedRoute, private staticProductsService: StaticProductsService, private location: Location, private router: Router){ }
  ngOnInit() {
    // this.productID = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.productID = Number(params.get('id'))
      this.product = this.staticProductsService.getproductByID(this.productID)
    })
    this.productsIDs = this.staticProductsService.getProductsIDs()
  }

  goBack(){
    this.location.back()
  }

  prev(){
    this.productsIDs = this.staticProductsService.getProductsIDs()
    // console.log(productsIDs)
    let index = this.productsIDs.indexOf(this.productID)
    // console.log(index)
    // console.log(productsIDs[--index])
    this.router.navigateByUrl(`/details/${this.productsIDs[--index]}`)
  }

  next(){
    this.productsIDs = this.staticProductsService.getProductsIDs()
    // console.log(productsIDs)
    let index = this.productsIDs.indexOf(this.productID)
    // console.log(index)
    // console.log(productsIDs[--index])
    this.router.navigateByUrl(`/details/${this.productsIDs[++index]}`)
  }
  
}
