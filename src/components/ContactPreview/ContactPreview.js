import React from 'react';

import './ContactPreview.scss'

import imAvatar from 'Assets/img_avatar.png'

const ContactPreview = ({contact}) => {
  return (
    <div className="contact-preview">
      <img src={imAvatar} alt="Person" width="96" height="96" />
      <span>{contact.name}</span>
    </div>
  )
}

export default ContactPreview;
