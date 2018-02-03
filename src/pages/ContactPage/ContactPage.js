import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadContacts } from '../../actions/contacts.actions'
import { Link } from 'react-router-dom';

import { createSelector } from 'reselect'
import { getContactsSelector } from 'Selectors'

import ContactList from 'Components/ContactList/ContactList'
import ContactFilter from 'Components/ContactFilter/ContactFilter'

import './ContactPage.scss'


class ContactPage extends Component {

  componentDidMount() {
    this.props.loadContacts()
  }

  contactSearch = (term) => {
    this.props.loadContacts({term})
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

const getContacts = createSelector(
  getContactsSelector,
  contacts => ({contacts})
)

const mapStateToProps = (state) => getContacts(state)

export default connect(mapStateToProps, {loadContacts})(ContactPage);
