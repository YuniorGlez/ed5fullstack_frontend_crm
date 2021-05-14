import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }


  getAll(): Customer[] {

    return [{
      name: "Luis",
      email: "luis@squaads.com",
      contacted: true,
      photoURL : "https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
    },
    {
      name: "Manolo",
      email: "manolo@squaads.com",
      contacted: true,
      photoURL : "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      name: "Luisa",
      email: "luisa@squaads.com",
      contacted: true,
      photoURL : "https://uifaces.co/our-content/donated/3799Ffxy.jpeg"
    }]
  }


}
