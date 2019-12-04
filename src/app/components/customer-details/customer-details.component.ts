import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router , ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  id: string;
  customer: Customer = {
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:'',
    notes:''
  };
  headerIcon: string;
  headerTitle: string;

  constructor( 
    private customersService: CustomersService, 
    private router: Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    document.title = 'COMPANY CRM | Customer Detailes';
    this.headerTitle = "Customer Detailes";
    this.headerIcon = "fas fa-user";
    this.id = this.route.snapshot.params['id'];
    this.customersService.getCustomer(this.id).subscribe(customerFireBase => {
      this.customer = customerFireBase
    });
  }

}
