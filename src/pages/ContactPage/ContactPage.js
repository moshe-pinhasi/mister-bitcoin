import React, { Component } from 'react';

import ContactList from '../../components/ContactList/ContactList'
import ContactService from '../../services/ContactService'

class ContactPage extends Component {
    
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
          <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default ContactPage;
