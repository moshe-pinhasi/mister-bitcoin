import React from 'react';
import { Link } from 'react-router-dom';
import './ContactList.css';

import ContactPreview from '../ContactPreview/ContactPreview'

const ContactList = (props) => {
  const contactsPreview = props.contacts.map( (contact, i) => {
      return (
          <li key={contact._id} className="contacts-list-item">
            <Link to={`/contacts/${contact._id}`}><ContactPreview contact={contact} /></Link>
          </li>
      )
  });
    
  return (
    <div className="contacts-list">
      <ul>
          {contactsPreview}
      </ul>
    </div>
  );
}

export default ContactList;
