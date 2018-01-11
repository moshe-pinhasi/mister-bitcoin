import React from 'react';
import './ContactsList.css';

import ContactPreview from '../ContactPreview/ContactPreview'

const ContactsList = (props) => {
  const contactsPreview = props.contacts.map( (contact, i) => {
      return (
          <li key={contact._id} className="contacts-list-item">
            <ContactPreview contact={contact} />
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

export default ContactsList;
