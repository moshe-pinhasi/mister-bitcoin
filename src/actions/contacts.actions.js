import ContactsService from 'Services/ContactService'

export const SET_CONTACTS = 'CONTACTS/SET_CONTACTS'
export const SELECTED_CONTACT = 'CONTACTS/SELECTED_CONTACT'
export const CONTACT_SAVED = 'CONTACTS/CONTACT_SAVED'
export const CONTACT_ADDED = 'CONTACTS/CONTACT_ADDED'
export const DELETE_CONTACT = 'CONTACTS/DELETE_CONTACT'

export function loadContacts(query = null) {
    
    return {
        type: SET_CONTACTS,
        payload: ContactsService.getContacts(query)
    };
}

export function saveContact(contact, callback) {
    return {
        type: contact._id ? CONTACT_SAVED : CONTACT_ADDED,
        payload: ContactsService.saveContact(contact).then(callback)
    }
}

export function fetchContact(contact) {
    
    return {
        type: SELECTED_CONTACT,
        payload: ContactsService.getContactById(contact)
    };
}

export function deleteContact(contact, callback) {
    
    return {
        type: DELETE_CONTACT,
        payload: ContactsService.deleteContact(contact).then(contact => {
            callback()
            return contact
        })
    };
}