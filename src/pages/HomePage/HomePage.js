import React, { Component } from 'react'
import { connect } from 'react-redux'
import BitcoinService from 'Services/BitcoinService'

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state =  { 
      rate: 0 
    }
  }

  componentDidMount() {
    const user = this.props.user
    if (!user) return
    
    BitcoinService.getRate(user.coins).then(rate => {
      this.setState({rate})  
    }) 
  }

  render () {
    const user = this.props.user
    if (!user) return (<div className="home-page"></div>)

    return (
      <div className="home-page">
          <div>Hello {this.props.user.name}!</div>
          <div>You have {this.props.user.coins} coins!</div>
          <div>Your Bitcoin rate is: {this.state.rate}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(HomePage);
