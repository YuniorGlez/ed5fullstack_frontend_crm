import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: Customer = { name: 'Luisito comunica ', email: 'luisito3@squaads.com', photoURL: 'https://imagenesntn24.canalrcn.com/ImgNtn24/luisitocomunica.jpg', contacted: false };

  constructor(private customersService: CustomersService) {

  }

  ngOnInit(): void {
    // Cargo los datos del service CustomerService
    this.customersService.getAll().then(res => this.customers = res)
  }

  onSave() {
    this.customersService.post(this.newCustomer)
      .then(newCustomer => {
        console.log({ newCustomer });
        this.customers.push(newCustomer); // Tener en cuenta que esto solo sirve si no estamos paginando
        // o cosas por el estilo
        // this.customersService.getAll().then(res => this.customers = res)

      })



  }

}
