import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  constructor( private customersService: CustomersService,
    private fms:FlashMessagesService,
    private router:Router,
    ) { }

  ngOnInit() {
      document.title = "COMPANY CRM | Add Customer Form";
      this.headerTitle = "Add Customer Form";
      this.headerIcon = "fas fa-user-plus";
  }

  onSubmit( {value, valid })
  {
    if(valid)
    {
      this.customersService.addCustomer(value);
      this.fms.show('customer Saved', { cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center', timeout:3000});
      this.router.navigate(['customers']);
    }
    console.log(value, valid);
  }
}
