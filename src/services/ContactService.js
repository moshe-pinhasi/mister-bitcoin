import uniqid from 'uniqid'

const contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "picture": "../../assets/image_avatar.png",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "picture": "../../assets/image_avatar.png",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "picture": "../../assets/image_avatar.png",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "picture": "../../assets/image_avatar.png",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "picture": "../../assets/image_avatar.png",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258"
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "picture": "../../assets/image_avatar.png",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082"
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "picture": "../../assets/image_avatar.png",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "picture": "../../assets/image_avatar.png",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663"
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "picture": "../../assets/image_avatar.png",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "picture": "../../assets/image_avatar.png",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "picture": "../../assets/image_avatar.png",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "picture": "../../assets/image_avatar.png",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550"
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "picture": "../../assets/image_avatar.png",
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181"
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "picture": "../../assets/image_avatar.png",
    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376"
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "picture": "../../assets/image_avatar.png",
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557"
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "picture": "../../assets/image_avatar.png",
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629"
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "picture": "../../assets/image_avatar.png",
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529"
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "picture": "../../assets/image_avatar.png",
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291"
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "picture": "../../assets/image_avatar.png",
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812"
  }
];

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts () {
  return new Promise((resolve, reject) => { 
    resolve(sort(contacts))
  })
}

function getContactById (id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find( contact => contact._id === id)
      contact ? resolve(Object.assign({}, contact)) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( contact => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => { 
    const index = contacts.findIndex( c => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }

    resolve(contacts)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => { 
    contact._id = uniqid()
    contacts.push(contact)
    resolve(contacts)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    picture: '',
    name: '',
    email: '',
    phone: ''
  }
}

function filter (term) {
  term = term.toLocaleLowerCase()
  return new Promise((resolve, reject) => { 
    const c = contacts.filter( contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
             contact.phone.toLocaleLowerCase().includes(term) ||
             contact.email.toLocaleLowerCase().includes(term)
    })

    resolve(c)
  })
}

export default {
  getContacts,
  getContactById,
  deleteContact,
  filter,
  saveContact,
  getEmptyContact
}