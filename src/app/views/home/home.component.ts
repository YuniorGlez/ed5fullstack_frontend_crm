import { Component, OnInit } from '@angular/core';

interface Customer  {
  name: string,
  email: string,
  contacted: boolean,
  photoURL : string,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[]   = [{
    name: "Luis",
    email: "luis@squaads.com",
    contacted: false,
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
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
