import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { fetchContact } from '../../actions/contacts.actions'
import { transferCoins } from '../../actions/user.actions'
import {ContactSubNav} from '../../components/ContactSubNav/ContactSubNav'

import imAvatar from '../../assets/img_avatar.png'
import './ContactDetails.scss'

class ContactDetails  extends Component {

  constructor(props) {
    super(props)

    this.state = { amount: '', message: ''}

    this.links = [
      {name: 'Back', onClicked: this.onBackClicked}, 
      {name: 'Edit', onClicked: this.onDeleteContact}
    ]
  }

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    this.props.fetchContact(id)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    if (!this.state.amount) return

    const amount = Number(this.state.amount)
    if (!amount) {
      this.setState({ amount: this.state.amount, message: "Please enter a valid number"})
      return
    }

    this.props.transferCoins(
      this.props.user,  
      this.props.contact,
      amount, 
      () => this.setState({ amount: '', message: 'Transfer done!'}),
      (message) => this.setState({ amount, message})
    )
  }

  onInputChange = (event) => {
    const state = {...this.state, amount: event.target.value}
    this.setState(state)
  }

  onBackClicked = (event) =>
    this.props.history.push('/contacts')
  
  onDeleteContact = (event) => 
    this.props.history.push(`/contacts/edit/${this.props.contact._id}`)

  render() {
    const contact = this.props.contact || {}
    var {amount, message} = this.state

    return (
      <div className="contact-details">
        <div className="contact-details-header">
          <ContactSubNav links={this.links} />
        </div>

        <div className="contact-details-body">
          <img src={imAvatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
          <hr />
          <br />
          <div>Wants to transfer coins?</div>
          <form onSubmit={this.onFormSubmit} className="contact-details-form">
              <div className="form-group">
                <label>Amount:</label>
                <input 
                    value={amount}
                    onInput={this.onInputChange}/>

                <button type="submit" disabled={!amount}>Transfer</button>
              </div>
              <div className="form-group">
                {message ? message : ""}
              </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.selectedContact,
    user: state.user
  };
}

export default connect(mapStateToProps, {fetchContact, transferCoins})(ContactDetails);
