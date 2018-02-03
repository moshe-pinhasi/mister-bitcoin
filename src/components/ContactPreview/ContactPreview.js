import React from 'react';

import './ContactPreview.scss'

import { ImageAvatar } from 'Components/ImageAvatar/ImageAvatar'

const ContactPreview = ({contact}) => {
  return (
    <div className="contact-preview">
      <ImageAvatar />
      <span>{contact.name}</span>
    </div>
  )
}

export default ContactPreview;
