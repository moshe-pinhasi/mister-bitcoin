import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveUser } from '../../actions/user.actions'
import UserService from '../../services/UserService'

import './SignupPage.css'

class SignUpPage extends Component {
  
  constructor(props) {
    super(props)

    this.state =  { 
      user: UserService.getEmptyUser() 
    }
  }

  onInputChange = (event) => {
    const user = Object.assign({}, this.state.user, {name: event.target.value})
    this.setState({user})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    
    this.props.saveUser(this.state.user).then ( () =>
        this.props.history.push('/'))  
  }

  render() {
    const {user} = this.state  

    return (
      <div className="signup">

          <div className="signup-body">
              <form onSubmit={this.onFormSubmit} className="signup-form">
                  <div>Please enter your name:</div>
                  <div className="form-group">
                    
                    <input 
                        placeholder="Name"
                        value={user.name}
                        onInput={this.onInputChange}/>
                  </div>
                  
                  <div className="form-actions-container">
                    <button type="submit">Sign up</button>
                  </div>
              </form>
          </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpPage);