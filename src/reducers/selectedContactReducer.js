import { SELECTED_CONTACT, DELETE_CONTACT } from '../actions/contacts.actions';

const selectedContact = (state = null, action) => {
    switch (action.type) {
      case SELECTED_CONTACT:
        return action.payload

      case DELETE_CONTACT:
        return null
        
      default:
        return state
    }
  }
  
  export default selectedContact