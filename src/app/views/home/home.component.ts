import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[]   = [];

  constructor( private customersService : CustomersService   ) { }

  ngOnInit(  ): void {

    // Cargo los datos del service CustomerService
    this.customers = this.customersService.getAll();


  }

}
