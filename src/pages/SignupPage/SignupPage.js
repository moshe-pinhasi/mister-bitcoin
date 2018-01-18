import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveUser } from '../../actions/user.actions'
import UserService from '../../services/UserService'
import {Input} from '../../components/Input/Input'

import './SignupPage.scss'

class SignUpPage extends Component {
  
  constructor(props) {
    super(props)

    this.state =  { 
      user: UserService.getEmptyUser() 
    }
  }

  onInputChange = (fieldName, value) => {
    const user = {...this.state.user, name: value}
    this.setState({user})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    
    this.props.saveUser(this.state.user).then ( () =>
        this.props.history.push('/'))  
  }

  render() {
    const {user} = this.state  
    const field = {name: 'name', value: user.name}

    return (
      <div className="signup">

          <div className="signup-body">
              <form onSubmit={this.onFormSubmit} className="signup-form">
                  <div>Please enter your name:</div>

                  <Input field={field} onInput={this.onInputChange} />
                  
                  <div className="form-actions-container">
                    <button type="submit">Sign up</button>
                  </div>
              </form>
          </div>
      </div>
    )
  }
}

export default connect(null, {saveUser})(SignUpPage);