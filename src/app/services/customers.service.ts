import { Injectable, ÉµCodegenComponentFactoryResolver } from '@angular/core';
import axios from 'axios';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiUrl = "http://localhost:3000/customers/";
  constructor() { }

  getAll(): Promise<Customer[]> {
    return axios.get(this.apiUrl + '?limit=10&offset=20')
      .then(res => res.data)
  }


  post(customer : Customer) {
    return axios.post(this.apiUrl, customer)
      .then(res => res.data)
  }



  // return [{
  //   name: "Luis",
  //   email: "luis@squaads.com",
  //   contacted: true,
  //   photoURL: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
  // },
  // {
  //   name: "Manolo",
  //   email: "manolo@squaads.com",
  //   contacted: true,
  //   photoURL: "https://randomuser.me/api/portraits/men/36.jpg"
  // },
  // {
  //   name: "Luisa",
  //   email: "luisa@squaads.com",
  //   contacted: true,
  //   photoURL: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg"
  // }]
  // }


}
