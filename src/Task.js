import React, { Component } from 'react';

class Task extends Component{
    render() {
        return (
            <div>— {this.props.data.text}</div>
        );
    }
}

export default Task;