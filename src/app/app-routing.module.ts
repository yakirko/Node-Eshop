import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent} from './components/customers/customers.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { ContactsComponent} from './components/contacts/contacts.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component'
import { AuthGuard } from './guards/auth.guard';




const appRoutes:Routes = [
  {
    path:'', redirectTo:'customers',pathMatch:'full'
  },

  {
    path: 'customers',
    component:CustomersComponent,canActivate: [AuthGuard],
  },
  {
    path: 'customer/:id',
    component:CustomerDetailsComponent,canActivate: [AuthGuard],
  },

  {
    path:'customer/:id/edit' , component:EditCustomerComponent
  },
  {
    path: 'contacts',
    component:ContactsComponent, canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path:'customers/new' ,component: NewCustomerComponent,canActivate: [AuthGuard],
  },
  {
    path:'**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
