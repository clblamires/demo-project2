import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { ContactsService } from '../../services/contacts.service';
import { NgForm } from '@angular/forms';
// import { Contact } from '../../interfaces/contact.interface';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public contactsService : ContactsService,
    public events: Events
  ) {
  }

  closePage(){
    this.viewCtrl.dismiss();
  }

  addContact( form: NgForm ){
    let newContact = {
      id: this.contactsService.countContacts() + 1,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email
    };
    this.contactsService.addContact(newContact);
    
    this.events.publish('new_contact');
    form.reset();
    this.closePage();
  }

}
