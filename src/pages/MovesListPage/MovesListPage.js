import React, { Component } from 'react';
import { connect } from 'react-redux'

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
      if (!contactsMap[contactId]) {
        return (
          <div></div>
        )
      }
      
      var date = new Date(move.at)
      return (
          <li key={move.at} className="moves-list-item">
            <div>To: {contactsMap[contactId].name}</div>
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

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    user: state.user
  };
}

export default connect(mapStateToProps)(MovesListPage);
