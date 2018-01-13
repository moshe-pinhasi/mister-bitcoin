import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer'
import SelectedContactReducer from './selectedContactReducer'
import UserReducer from './userReducer'

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  selectedContact: SelectedContactReducer,
  user: UserReducer
});

export default rootReducer;
