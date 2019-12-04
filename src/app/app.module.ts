import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { environment } from '../environments/environment';
import { AngularFireModule }  from 'angularfire2';
import { AngularFirestoreModule }  from 'angularfire2/firestore';
import { AngularFireAuthModule }  from 'angularfire2/auth';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { FlashMessagesModule }  from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";



@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    CustomersComponent,
    PageNotFoundComponent,
    ContactsComponent,
    PageHeaderComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,   //משיכות
    AngularFireAuthModule,    //login-logout
    GooglePlaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
