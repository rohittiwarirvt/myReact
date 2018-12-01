import React, { Component } from 'react';

import ContactDetail  from './ContactDetail';
import ContactSearch from './ContactSearch';


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentWillMount() {
    let init = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(contactsAPI, init)
      .then( response => response.json())
      .then(
        data => this.setState(
          prevState => ({contactList: [ ...data.contacts ]})
          )
        )
  }

  getContacts() {
    return this.state.contactlist;
  }


  render () {
    return (
      <div>
        <h3>Recent Contacts</h3>
        <div>
          <ContactSearch/>
          <ul>{
            this.getContacts().map(
              (contact) =>
              <li key={contact.id} >
                <ContactDetail contact={contact}/>
              </li>
              )
          }
          </ul>
        </div>
      </div>
      )
  }
}

export default Contact;
