import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer'
import SelectedContactReducer from './selectedContactReducer'

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  selectedContact: SelectedContactReducer
});

export default rootReducer;
