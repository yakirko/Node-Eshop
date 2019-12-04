import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customerCollection: AngularFirestoreCollection<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;
  customers: Observable<Customer[]>;
  customer: Observable<Customer>;

  constructor( 
    private afs:AngularFirestore) {
      this.customerCollection = this.afs.collection('customers');
   }

   getCustomers(): Observable<Customer[]> {

      this.customers = this.customerCollection.snapshotChanges().pipe(

        map( (actions)=>{
                return actions.map(
                  (a) => {
                    const data = a.payload.doc.data() as Customer;
                    data.id = a.payload.doc.id;
                    return data;
                  }
                );
             })
      );
      return this.customers;
   }

   getCustomer( id:string){
    this.customerDoc = this.afs.doc(`customers/${id}`);

    this.customer = this.customerDoc.snapshotChanges().pipe(

      map(
        (a) => {
          const data = a.payload.data() as Customer;   
          data.id = a.payload.id;
          return data;
          }
      )
    )
    return this.customer;
   }

   

   addCustomer( customer: Customer){
    this.customerCollection.add(customer);
   }

   updateCustomer( customer: Customer){
      this.customerDoc = this.afs.doc(`customers/${customer.id}`);
      this.customerDoc.update( customer);
   }

   deleteCustomer(customerId)
   {
    this.customerDoc = this.afs.doc(`customers/${customerId}`);
    this.customerDoc.delete();
   }

}
