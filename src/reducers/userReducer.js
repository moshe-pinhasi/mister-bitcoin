import { USER_SAVED, USER_LOADED, TRANSFER_COINS } from '../actions/user.actions';

const user = (state = null, action) => {
    switch (action.type) {
      case USER_LOADED: {
        if (!action.payload) {
          return null
        }

        return action.payload
      }

      case TRANSFER_COINS: {
        return state
      }

      case USER_SAVED:
        return action.payload
      
      default:
        return state
    }
  }
  
  export default user