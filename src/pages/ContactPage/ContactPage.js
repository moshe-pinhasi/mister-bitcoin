import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadContacts, filterContacts } from '../../actions'

import ContactList from '../../components/ContactList/ContactList'
import ContactFilter from '../../components/ContactFilter/ContactFilter'

import './ContactPage.css'

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadContacts, filterContacts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
