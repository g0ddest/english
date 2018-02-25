import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
    render(){
        return (
            <span className="Person">{this.props.data.last_name} {this.props.data.first_name} {this.props.data.patronymic_name}</span>
        )
    }
}

export default Person;