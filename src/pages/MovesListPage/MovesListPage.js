import React, { Component } from 'react';
import { connect } from 'react-redux'

import { createSelector } from 'reselect'
import { getContactsSelector, getUserSelector } from 'Selectors'


import './MovesListPage.scss'

class MovesListPage extends Component {

  renderMoves() {
    const moves = this.props.user.moves
    const contactsMap = this.props.contacts.reduce((map, contact) => {
      map[contact._id] = contact
      return map 
    }, {})

    return moves.map( move => {
      const contactId = move.to
      const contactName = contactsMap[contactId] ? contactsMap[contactId].name : 'Contact deleted'
      var date = new Date(move.at)
      return (
          <li key={move.at} className="moves-list-item">
            <div>To: {contactName}</div>
            <div>Amout: {move.amount} coins</div>
            <div>At: {date.toLocaleString()}</div>
            <hr />
          </li>
      )
    })
  }

  render() {
    return (
      <div className="moves-list-page">
        <div className="moves-list-header">Your Moves:</div>
        <hr/>
        <div>
          <ul>
            {this.renderMoves()}
          </ul>
        </div>
      </div>
    )
  }
}

const getProps = createSelector(
  [getContactsSelector, getUserSelector],
  (contacts, user) => ({contacts, user})
)

const mapStateToProps = (state) => getProps(state)

export default connect(mapStateToProps)(MovesListPage);
