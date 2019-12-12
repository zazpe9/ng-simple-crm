import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string; 
  people: ICustomer[];
  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "Customers";
    this.isVisible = true;
    this.people = [
      {
        id: 1, name: "Jon Egizu", city: 'Elizondo', orderTotal: 9.99, customerSince: new Date(2014,7,10)
      },
      {
        id: 2, name: "David Zazpe", city: 'Pamplona', orderTotal: 19.99, customerSince: new Date(2017,2,22)
      },
      {
        id: 3, name: "Jordi ENP", city: 'Fakings', orderTotal: 69.69, customerSince: new Date(2019,10,13)
      },
      {
        id: 4, name: "Joseba Cilarte", city: 'Tafalla', orderTotal: 29.99, customerSince: new Date(2012,10,31)
      }
    ];
  }

  changeVisibility(){
    if(this.isVisible){
      this.isVisible = false
    }else{
      this.isVisible = true
    }
  }

}
