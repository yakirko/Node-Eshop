import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';





@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  id: string;
  customer: Customer={
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  };

   options={
    types: [],
    componentRestrictions: { country: 'IL' }
    }

  @ViewChild('search',{static: false}) searchElement: ElementRef;
  @ViewChild("placesRef", {static: false}) placesRef : GooglePlaceDirective;
    
       

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private fms:FlashMessagesService,
    
  ) { }

  ngOnInit() {
    document.title =  "COMPANY CRM | Edit Customer Form";
    this.headerTitle = " Edit Customer Form";
    this.headerIcon = "fas fa-pen";

    this.id = this.route.snapshot.params['id'];
    this.customersService.getCustomer(this.id).subscribe((customerFireBase) => {
      this.customer = customerFireBase;

    });

  }

    handleAddressChange(address: Address) {
       console.log(address.name);
}


  onSubmit({valid , value , touched })
  {
    if (valid && touched) {
      value.id = this.id;
      this.customersService.updateCustomer(value);
      this.fms.show('customer Updated!!', { cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center', timeout:3000});
      this.router.navigate(['customers']);
    }else
    {
      this.fms.show('customer has NOT Updated!!', { cssClass: 'fixed-top m-auto bg-danger w-50 text-white text-center', timeout:3000});
      this.router.navigate(['customers']);
    }
  }

}
