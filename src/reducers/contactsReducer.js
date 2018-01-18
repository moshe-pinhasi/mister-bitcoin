import { SET_CONTACTS, CONTACT_SAVED, CONTACT_ADDED, DELETE_CONTACT } from 'Actions/contacts.actions';

const contacts = (state = [], {type, payload}) => {
    switch (type) {

      case SET_CONTACTS:
        return [...payload]

      case CONTACT_SAVED: 
        return state.map(contact => 
          (contact._id === payload._id) ? payload : contact)
      
      case CONTACT_ADDED:
        return [...state, ...payload]
      
      case DELETE_CONTACT:
        return state.filter(contact => contact._id !== payload._id)

      default:
        return state
    }
  }
  
  export default contacts