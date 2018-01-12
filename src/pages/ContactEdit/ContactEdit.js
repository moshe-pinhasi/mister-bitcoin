import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './ContactEdit.css'
import imAvatar from '../../assets/img_avatar.png'

import ContactService from '../../services/ContactService'

class ContactEdit  extends Component {
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
      <div className="contact-edit">
        <div className="contact-edit-body">
          <img src={imAvatar} alt="Person" width="96" height="96" /><hr />
          <div className="contact-edit-row">Name: {this.state.contact.name}</div><hr />
          <div className="contact-edit-row">Phone: {this.state.contact.phone}</div><hr />
          <div className="contact-edit-row">Email: {this.state.contact.email}</div><hr />
        </div>
        
        <br />
        <br />
        <footer className="contact-edit-footer">
          <Link to={`/contacts`} >Back</Link>
          <Link to={`/contacts`}>Save</Link>
        </footer>
      </div>
    )
  }
  
}

export default ContactEdit;
