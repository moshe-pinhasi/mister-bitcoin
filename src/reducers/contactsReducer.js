import { SET_CONTACTS, FILTER_CONTACTS } from '../actions/contacts.actions';

const contacts = (state = [], action) => {
    switch (action.type) {
      case SET_CONTACTS:
      case FILTER_CONTACTS:
        return action.payload
      
      default:
        return state
    }
  }
  
  export default contacts