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
        <div className="contact-details-body">
          <img src={imAvatar} alt="Person" width="96" height="96" /><hr />
          <div className="contact-details-row">Name: {this.state.contact.name}</div><hr />
          <div className="contact-details-row">Phone: {this.state.contact.phone}</div><hr />
          <div className="contact-details-row">Email: {this.state.contact.email}</div><hr />
        </div>
        
        <br />
        <br />
        <footer className="contact-details-footer">
          <Link to={`/contacts`} >Back</Link>
          <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
        </footer>
      </div>
    )
  }
  
}

export default ContactDetails;
