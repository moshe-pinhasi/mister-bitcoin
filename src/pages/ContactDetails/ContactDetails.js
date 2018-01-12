import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './ContactDetails.css'
import imAvatar from '../../assets/img_avatar.png'

import ContactService from '../../services/ContactService'

class ContactDetails  extends Component {
  constructor(props) {
    super(props)

    this.state =  { contact: {} }
  }

  componentWillMount() {
    const id = this.props.match.params.id; // params -> from url
    this.fetchContact(id);
  }

  fetchContact(id) {
    ContactService.getContactById(id)
      .then( contact => {
        this.setState( {contact})
      })
  }

  render() {
    return (
      <div className="contact-details">
        <header className="contact-details-header">
          <Link to={`/contacts`} >Back</Link>
          <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
        </header>
        <div className="contact-details-body">
          <img src={imAvatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {this.state.contact.name}</div>
          <div className="contact-details-row">Phone: {this.state.contact.phone}</div>
          <div className="contact-details-row">Email: {this.state.contact.email}</div>
        </div>
      </div>
    )
  }
  
}

export default ContactDetails;
