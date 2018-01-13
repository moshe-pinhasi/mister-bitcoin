import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactList from '../../components/ContactList/ContactList'
import ContactService from '../../services/ContactService'
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import './ContactPage.css'

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

  contactSearch = (term) => {
    ContactService.filter(term).then(contacts => this.setState({contacts}))
  }
  
  render() {
    return (
      <div className="contacts-page">
        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={this.state.contacts} />
        </div>
        <div className="action-container">
          <Link to={'/contacts/edit/'}>+</Link>
        </div>
      </div>
    );
  }
}

export default ContactPage;
