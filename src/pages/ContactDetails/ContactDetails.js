import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchContact } from '../../actions/contacts.actions'

import imAvatar from '../../assets/img_avatar.png'
import './ContactDetails.css'

class ContactDetails  extends Component {

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    this.props.fetchContact(id)
  }

  render() {
    const contact = this.props.contact || {}

    return (
      <div className="contact-details">
        <header className="contact-details-header">
          <Link to={`/contacts`} >Back</Link>
          <Link to={`/contacts/edit/${contact._id}`}>Edit</Link>
        </header>
        <div className="contact-details-body">
          <img src={imAvatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.selectedContact
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
