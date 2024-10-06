import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderComponent } from './Components/order/order.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { guardAuthGuard } from './guards/guard-auth.guard';
import { AddNewProductComponent } from './Components/add-new-product/add-new-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent , children: [
            {path: '', redirectTo: 'home', title: 'Home' , pathMatch: 'full'},
            {path: 'home', component: HomeComponent, title: 'Home'},
            {path: 'products', component: OrderComponent, title: 'Products' , canActivate: [guardAuthGuard]},
            {path: 'details/:id', component: ProductDetailsComponent, title: 'Products Details' , canActivate: [guardAuthGuard]},
            {path: 'product/add', component: AddNewProductComponent, title: 'Add New Products' , canActivate: [guardAuthGuard]},
            {path: 'about', component: AboutUsComponent, title: 'About Us'},
            {path: 'contact', component: ContactUsComponent, title: 'Contact Us' , canActivate: [guardAuthGuard]},
            {path: 'login', component: LoginComponent , title: 'Login'},
            {path: 'register', component: UserRegisterComponent , title: 'User Register'},
        ]}, 
    {path: '**', component: NotFoundComponent, title: 'Not Found 404'}
];



// export const routes: Routes = [
//     {path: '', redirectTo: 'home', title: 'Home' , pathMatch: 'full'},
//     {path: 'home', component: HomeComponent, title: 'Home'},
//     {path: 'products', component: OrderComponent, title: 'Products'},
//     {path: 'about', component: AboutUsComponent, title: 'About Us'},
//     {path: 'contact', component: ContactUsComponent, title: 'Contact Us'},
//     {path: 'login', component: LoginComponent , title: 'Login'},

//     {path: '**', component: NotFoundComponent, title: 'Not Found 404'}
// ];
