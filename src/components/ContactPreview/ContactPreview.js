import React from 'react';
import './ContactPreview.css';

const ContactPreview = ({contact}) => {
  return (
    <div className="contacts-preview">
      {contact.name}
    </div>
  )
}

export default ContactPreview;
