import React from 'react';
import './ContactsList.css';

import ContactPreview from '../ContactPreview/ContactPreview'

const ContactsList = (props) => {
  const contactsPreview = props.contacts.map( (contact, i) => {
      return (
          <li key={contact._id}>
            <ContactPreview contact={contact} />
          </li>
      )
  });
    
  return (
    <ul className="contacts-list">
        {contactsPreview}
    </ul>
  );
}

export default ContactsList;
