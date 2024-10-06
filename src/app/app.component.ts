import { Component } from '@angular/core';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent ,FooterComponent, ProductsComponent, OrderComponent, RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoV2';
}
