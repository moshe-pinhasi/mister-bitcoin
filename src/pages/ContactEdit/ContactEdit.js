import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchContact, saveContact, deleteContact } from '../../actions'

import ContactService from '../../services/ContactService'

import imAvatar from '../../assets/img_avatar.png'
import './ContactEdit.css'

class ContactEdit  extends Component {

  constructor(props) {
    super(props)

    this.state =  { 
      contact: ContactService.getEmptyContact() 
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    this.props.fetchContact(id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({contact: nextProps.contact})
  }

  onInputChange(field) {
    return (event) => {
      const contact = Object.assign({}, this.state.contact, {[field]: event.target.value})
      this.setState({contact})
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const contact = this.state.contact
    
    this.props.saveContact(contact).then ( () =>
        this.props.history.push(`/contacts/${contact._id}`))  
  }

  onDeleteContact = () => {
    this.props.deleteContact(this.state.contact._id, () =>
        this.props.history.push(`/contacts`))
  }
  
  render() {
    const {contact} = this.state // better option - to add condition and show ""loading

    return (
      <div className="contact-edit">
          <header className="contact-edit-header">
            <Link to={`/contacts/${contact._id}`}>Back</Link>
            <Link to='/' onClick={this.onDeleteContact}>Delete</Link>
          </header>
          <div className="contact-edit-body">
              <img src={imAvatar} alt="Person" width="96" height="96" />
              <form onSubmit={this.onFormSubmit} className="contact-edit-form">
                  <div className="form-group">
                    <label>Name:</label>
                    <input 
                        placeholder="Name"
                        value={contact.name}
                        onInput={this.onInputChange('name')}/>
                  </div>

                  <div className="form-group">
                    <label>Phone:</label>
                    <input 
                        placeholder="Phone"
                        value={contact.phone}
                        onInput={this.onInputChange('phone')}/>
                  </div>

                  <div className="form-group">
                    <label>Email:</label>
                    <input 
                        placeholder="Email"
                        value={contact.email}
                        onInput={this.onInputChange('email')}/>
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

function mapStateToProps(state) {
  return {
    contact: state.selectedContact
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchContact, saveContact, deleteContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);
