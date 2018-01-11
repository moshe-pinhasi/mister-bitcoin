import React, { Component } from 'react';

import ContactsList from '../ContactsList/ContactsList'
import ContactService from '../../services/ContactService'

class ContactsPage extends Component {
    
  constructor(props) {
    super(props);

    this.state = { 
      contacts: []
    };

    this.loadContacts();
  }

  loadContacts() {
    ContactService.getContacts().then (contacts => {
      this.setState({contacts})
    })
  }
  
  render() {
    return (
      <div className="contacts-page">
          <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default ContactsPage;
