import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer';
import * as _ from 'lodash';
import { FlashMessagesService }  from 'angular2-flash-messages';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  customers: Customer[];
  customersOrigin: Customer[];
  firstName:string;
  lastName:string;
  phone:string;

  constructor( private customersService: CustomersService, 
      private fms:FlashMessagesService

    ) { }

  ngOnInit() {
    this.fms.show('We are in about component!', { cssClass: 'alert-success', timeout: 3000});
    document.title = 'COMPANY CRM | Custumers';

    this.headerTitle = "Contacts";
    this.headerIcon = "fas fa-user";

    this.customersService.getCustomers().subscribe(
      (customers) => {
        this.customers = customers;
        this.customersOrigin = this.customers = customers;
        console.table(customers);
      }
    );
  }

  onsearch( field  )
  {
    console.log(this[field]);
    let searchField = this[field].toLowerCase();
    if(searchField.length > 0)
    {
      this.customers = this.customersOrigin.filter(
        ( data: Customer )=> {
          return _.includes( data[field].toLowerCase() , searchField );
        }
      );
    }else{
      this.customers = this.customersOrigin;
    }
  }

  showOnHover(event){
    console.log(event);
    event.target.children[0].children[0].style.scssText = 'visibility:visible !important';
  }

  hideOnHover(event){
    console.log(event);
    event.target.children[0].children[0].style.scssText = 'visibility:hidden !important';
  }

  onDeleteCustomer(customerId)
  {
    // alert('delete Customer ' + customerId);
    if(confirm('Are You Sure?'))
    {
      alert('delete Customer ' + customerId);
      this.customersService.deleteCustomer(customerId);
      this.fms.show('customer Deleted', { cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center', timeout:3000});
    }else{
      this.fms.show('Abort customer Deleted', { cssClass: 'fixed-top m-auto bg-danger w-50 text-white text-center', timeout:3000});
    }
  }

}
