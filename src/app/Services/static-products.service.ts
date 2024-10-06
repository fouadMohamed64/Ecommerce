import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  products:Iproduct[];

  constructor() { 
    this.products = [
      {id: 100, name: 'Iphone', quintity: 1, imgURL: 'https://fakeimg.pl/350x200/?text=Product1&font=lobster', price: 555, catID: 1},
      {id: 200, name: 'Dell', quintity: 3, imgURL: 'https://fakeimg.pl/350x200/?text=Product2d&font=lobster', price: 33, catID: 2},
      {id: 300, name: 'Tablet', quintity: 3, imgURL: 'https://fakeimg.pl/350x200/?text=Product3&font=lobster', price: 22, catID: 3},
      {id: 400, name: 'HD', quintity: 44, imgURL: 'https://fakeimg.pl/350x200/?text=Product4&font=lobster', price: 344, catID: 2},
      {id: 500, name: 'OppO', quintity: 0, imgURL: 'https://fakeimg.pl/350x200/?text=Product5&font=lobster', price: 11, catID: 1},
      {id: 600, name: 'Tab', quintity: 12, imgURL: 'https://fakeimg.pl/350x200/?text=Product6&font=lobster', price: 113, catID: 3},
  ]
  }

  getAllProducts():Iproduct[]{
    return this.products;
  }

  getproductByID(id:number):Iproduct | null{
    let product = this.products.find((prd:Iproduct)=>prd.id == id)
    return product ? product : null;
  }

  getProductsByCatID(catID:number):Iproduct[]{
    return this.products.filter((prd)=>prd.catID == catID)
  }

  getProductsIDs():number[]{
    return this.products.map((prd)=>prd.id)
  }
}
