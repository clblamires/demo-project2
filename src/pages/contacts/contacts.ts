import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { NewContactPage } from '../new-contact/new-contact';
import { Contact }  from '../../interfaces/contact.interface';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public contactsService: ContactsService,
    public events: Events ) {
      events.subscribe('new_contact',() => {
        this.contactsService.sortContacts();
        this.contacts = this.contactsService.getContacts()
      });
    }
    
  contacts: Contact[] = [];
    
  addItem(){
    const modal = this.modalCtrl.create(NewContactPage);  
    modal.present();
  }

  loadContact( contact: Contact){
    this.navCtrl.push(ContactPage, { contact: contact });
  }

  ionViewWillEnter(){
    this.contactsService.sortContacts();
    this.contacts = this.contactsService.getContacts()    
  }

  removeAllContacts(){
    this.contactsService.removeAllContacts();
    this.contacts = this.contactsService.getContacts();
  }

}
