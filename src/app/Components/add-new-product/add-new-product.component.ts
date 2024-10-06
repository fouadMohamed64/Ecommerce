import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Icategory } from '../../Models/icategory';
import { Iproduct } from '../../Models/iproduct';
import { ApiService } from '../../Services/api.service';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent implements OnInit{

  categoriesList:Icategory[]=[] as Icategory[];
  product:Iproduct = {} as Iproduct;

  constructor(private categoryService: CategoryService , private apiService:ApiService, private router: Router){}
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next:(cats)=>{
        this.categoriesList = cats;
      },
      error:(err)=>{console.log(err)}
    })
  }


  addNewProduct(){
    this.apiService.addNewProduct(this.product).subscribe((res)=>{
      this.router.navigateByUrl("products")
    })
  }

}
