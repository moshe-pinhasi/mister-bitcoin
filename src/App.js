import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser } from './actions/user.actions'
import { loadContacts } from './actions/contacts.actions'

import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import MovesListPage from './pages/MovesListPage/MovesListPage'
import PrivateRoute from './containers/PrivateRoute'

import './App.css'
import './assets/icon-font/flaticon.css'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {loading: true}    
  }

  componentDidMount() {
    this.props.loadContacts()
    this.props.loadUser( () => {
      setTimeout( () => {
        this.setState({loading: false})  
      }, 1000)
      
    })
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div className="app loading">loading...</div>
      )
    }

    return (
      <div className="app">
        <Router>
          <div>
            <header className="app-header">
              <NavLink to="/"><i className="flaticon-presentation-board-with-graph"></i></NavLink>
              <NavLink to="/contacts"><i className="flaticon-group-of-businessmen"></i></NavLink>
              <NavLink to="/moves"><i className="flaticon-handshake"></i></NavLink>
            </header>

            <div className="app-content">
              <Switch>
                <PrivateRoute path="/contacts/edit/:id" component={ContactEdit} />
                <PrivateRoute path="/contacts/edit/" component={ContactEdit} />
                <PrivateRoute path="/contacts/:id" component={ContactDetails} />
                <PrivateRoute path="/contacts" component={ContactPage} />
                <PrivateRoute path="/moves" component={MovesListPage} />
                <Route path="/signup" component={SignupPage} />
                <PrivateRoute path="/" component={HomePage} />  
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadUser, loadContacts}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
