
import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { fetchContact, saveContact, deleteContact } from 'Actions/contacts.actions'

import { createSelector } from 'reselect'
import { getSelectedContactSelector } from 'Selectors'

import { Input } from 'Components/Input/Input'
import { ContactSubNav } from 'Components/ContactSubNav/ContactSubNav'
import ContactService from 'Services/ContactService'

import imAvatar from 'Assets/img_avatar.png'

const NAV_NAMES = {
  BACK: 'Back',
  DELETE: 'Delete'
}

class ContactEdit  extends Component {

  fields = ['name', 'phone', 'email']

  constructor(props) {
    super(props)

    const contact = ContactService.getEmptyContact()
    this.state =  { contact }

    this.navOptions = [
      {name: NAV_NAMES.BACK, onClicked: this.onBackClicked}, 
      {name: NAV_NAMES.DELETE, onClicked: this.onDeleteContact}
    ];

    this.setSubNav(contact)
  }

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    if (!id) return
    
    this.props.fetchContact(id)
  }

  componentWillReceiveProps(nextProps) {
    const contact = nextProps.contact
    this.setState({contact})

    this.setSubNav(contact)  
  }

  setSubNav(contact) {
    this.links = this.navOptions.filter( nav => 
      (nav.name !== NAV_NAMES.DELETE || contact._id))
  }

  onInputChange = (fieldName, value) => {
    const contact = {...this.state.contact, [fieldName]: value}
    this.setState({contact})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const contact = this.state.contact
    
    const nextUrl = contact._id ? `/contacts/${contact._id}` : `/contacts`
    this.props.saveContact(contact).then ( () =>
        this.props.history.push(nextUrl))
  }

  onBackClicked = (event) => {
    const contact = this.state.contact
    const backUrl = contact._id ? `/contacts/${contact._id}` : `/contacts`
    this.props.history.push(backUrl)
  }

  onDeleteContact = (event) => {
    this.props.deleteContact(this.state.contact, () =>
          this.props.history.push(`/contacts`))
  }
  
  renderFields() {
    const contact = this.state.contact
    
    return (
      this.fields
        .map( fieldName => ({name: fieldName, title: fieldName, value: contact[fieldName]}))
        .map(field => (<Input key={field.name} field={field} onInput={this.onInputChange} /> ))
    )
  }

  render() {
    return (
      <div className="contact-edit">
          <div className="contact-edit-header">
            <ContactSubNav links={this.links} />
          </div>
          <div className="contact-edit-body">
              <img src={imAvatar} alt="Person" width="96" height="96" />
              <form onSubmit={this.onFormSubmit} className="contact-edit-form">
                <div className="form-fields">
                  {this.renderFields()} 
                </div>
                <div className="form-actions-container">
                  <button type="submit">Save</button>
                </div>
              </form>
          </div>
      </div>
    )
  }
}

const getProps = createSelector(
  [getSelectedContactSelector],
  contact => ({contact})
)

const mapStateToProps = (state) => getProps(state)

export default connect(mapStateToProps, {fetchContact, saveContact, deleteContact})(ContactEdit);
