import React, { Component } from 'react';
import './Input.css'

export class Input extends Component {
    
    onInputChange = (event) => {
      this.props.onInput(this.props.field.name, event.target.value);
    }

    render () {
        var {value, title, name } = this.props.field

        return (
            <div className="input form-group">
                {title && (<label>{title}</label>)}
                <input 
                    placeholder={name}
                    value={value}
                    onInput={this.onInputChange}/>
            </div>
        );
    } 
}

