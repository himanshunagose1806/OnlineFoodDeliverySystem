import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router) {}

  // goToDeliveryPage() {
  //   this.router.navigate(['/delivery']);
  // }

  // goToCustomerPage() {
  //   this.router.navigate(['/customer']);
  // }
}
