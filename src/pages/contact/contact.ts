import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../interfaces/contact.interface';
import { ContactsService } from '../../services/contacts.service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contactsService: ContactsService) {
  }

  contact: Contact;
  contactFirstLetter: string;

  ngOnInit(){
    this.contact = this.navParams.get('contact');
    this.contactFirstLetter = this.contact.firstname.slice(0,1).toUpperCase();
  }

  removeContact(){
    this.contactsService.removeContact(this.contact);
    this.navCtrl.pop();
  }

  saveContact( form: NgForm ){
    this.contact.firstname = form.value.new_firstname;
    this.contact.lastname = form.value.new_lastname;
    this.contact.email = form.value.new_email;
    this.contactsService.updateContact(this.contact);
    console.log(this.contact);
    this.navCtrl.pop();
  }

}
