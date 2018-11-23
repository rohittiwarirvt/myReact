import React, { Component } from 'react';

import ContactDetail  from './ContactDetail';
import ContactSearch from './ContactSearch';

class Contact extends Component {

  render () {
    return (
      <div>
        <h3>Recent Contacts</h3>
        <div>
          <ContactDetail/>
          <ContactSearch/>
          <ul>
            <li>test1</li>
          </ul>
        </div>
      </div>
      )
  }
}

export default Contact;
