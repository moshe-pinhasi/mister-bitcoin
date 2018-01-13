
import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute  extends Component {

  render () {
    const { component: Component, user, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        user ? 
        (<Component {...props}/>) : 
        (
          <Redirect to={{
            pathname: '/signup',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(PrivateRoute);