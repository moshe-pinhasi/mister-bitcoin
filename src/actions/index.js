import ContactsService from '../services/ContactService'

export const SET_CONTACTS = 'SET_CONTACTS'
export const SELECTED_CONTACT = 'SELECTED_CONTACT'
export const CONTACT_SAVED = 'CONTACT_SAVED'
export const FILTER_CONTACTS = 'FILTER_CONTACTS'
export const DELETE_CONTACT = 'DELETE_CONTACT'

// export const ADD_CONTACT = 'ADD_CONTACT'

export function loadContacts() {
    const request = ContactsService.getContacts()
    
    return {
        type: SET_CONTACTS,
        payload: request
    };
}

export function saveContact(contact, callback) {
    const request = ContactsService.saveContact(contact).then(callback)

    return {
        type: CONTACT_SAVED,
        payload: request
    }
}

export function fetchContact(id) {
    const request = ContactsService.getContactById(id)
    return {
        type: SELECTED_CONTACT,
        payload: request
    };
}

export function filterContacts(term) {
    const request = ContactsService.filter(term)
    
    return {
        type: FILTER_CONTACTS,
        payload: request
    };
}

export function deleteContact(id, callback) {
    const request = ContactsService.deleteContact(id).then(callback)
    
    return {
        type: DELETE_CONTACT,
        payload: request
    };
}