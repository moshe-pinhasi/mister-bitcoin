import { SELECTED_CONTACT } from '../actions';

const selectedContact = (state = null, action) => {
    switch (action.type) {
      case SELECTED_CONTACT:
        return action.payload

      default:
        return state
    }
  }
  
  export default selectedContact