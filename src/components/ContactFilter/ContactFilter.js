import React, { Component } from 'react';

class ContactFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onFilter(term);
    }

    render () {
        return (
            <div className="contact-filter">
                <input
                    placeholder="Search"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    } 
}

export default ContactFilter