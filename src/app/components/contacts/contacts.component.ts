import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Array<Contact>;
  contactsOrigin: Array<Contact>;

  contactsLength: number = 0;
  searchNameText: string;
  headerTitle: string;
  headerIcon: string;


  constructor( private contactsService:ContactsService ) { }

  ngOnInit() {
    document.title = 'COMPANY CRM | Contacts';

    this.contactsService.getContacts().subscribe(
      (contacts: Array<Contact> ) => {
        console.log(contacts);
        this.contacts = contacts;
        this.contactsOrigin = this.contacts = _.sortBy(contacts,['name']) ;
        this.contactsLength = contacts.length;
      }
    );
      this.headerTitle = "Contacts";
      this.headerIcon = "fas fa-user";
  }
  onSearchName() {
    //console.log(this.searchNameText);
    let searchNameText = this.searchNameText.toLocaleLowerCase();

    if (searchNameText.length > 0) {
        this.contacts = this.contactsOrigin.filter(
           (contact) => { _.includes( contact.name.toLocaleLowerCase(),searchNameText)
           });
     } else
      {
        this.contacts = this.contactsOrigin;
      }
    }

  };



