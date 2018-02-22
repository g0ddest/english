import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
    render(){
        return (
            <p><span className="Person">{this.props.data.last_name} {this.props.data.first_name} {this.props.data.patronymic_name}</span></p>
        )
    }
}

export default Person;