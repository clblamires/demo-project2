import { Contact } from '../interfaces/contact.interface';

export class ContactsService {
    private contacts: Contact[] = [];

    addContact( newContact: Contact){
        this.contacts.push( newContact );
        console.log(this.contacts);
    }

    removeContact( contactToRemove: Contact ){
        let position;
        for( let i = 0; i < this.contacts.length; i++ ){
            if( this.contacts[i].id == contactToRemove.id ){
                position = i;
                break;
            }
        }
        this.contacts.splice( position, 1);
        console.log(this.contacts);
    }

    removeAllContacts(){
        this.contacts = [];
    }

    updateContact( editedContact: Contact ){
        let position;
        for( let i = 0; i < this.contacts.length; i++ ){
            if( this.contacts[i].id == editedContact.id ){
                position = i;
                break;
            }
        }
        this.contacts[position] = editedContact;
    }

    getContacts(){
        return this.contacts.slice();
    }

    countContacts(){
        return this.contacts.length;
    }

    sortContacts(){
        let newContacts = this.getContacts();
        function sortContacts(arr, key){
            return arr.sort( function(a,b){
                let x = a[key];
                let y = b[key];
                return ( (x<y) ? -1 : ( (x>y) ? 1 : 0 ));
            });
        }
        this.contacts = sortContacts(newContacts, 'lastname' );
    }
}