import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadContacts, filterContacts } from '../../actions/contacts.actions'
import { Link } from 'react-router-dom';

import ContactList from '../../components/ContactList/ContactList'
import ContactFilter from '../../components/ContactFilter/ContactFilter'

import './ContactPage.scss'

class ContactPage extends Component {

  componentDidMount() {
    this.props.loadContacts()
  }

  contactSearch = (term) => {
    this.props.filterContacts(term)
  }
  
  render() {
    return (
      <div className="contacts-page">
        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={this.props.contacts} />
        </div>

        <div className="action-container">
          <Link to={'/contacts/edit/'}>+</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps, {loadContacts, filterContacts})(ContactPage);
