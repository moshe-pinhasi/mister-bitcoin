import React  from 'react';

import './ContactSubNav.scss'

export const ContactSubNav = ({links}) => {

  return (
    <nav className="contact-sub-nav">
      {links.map(link => (<button key={link.name} onClick={link.onClicked}>{link.name}</button>))}
    </nav>
  )
  
}