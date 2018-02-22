import React, { Component } from 'react';

class Person extends Component{
    render(){
        return (
            <div>{this.props.data.last_name}</div>
        )
    }
}

export default Person;