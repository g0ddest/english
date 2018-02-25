import React, { Component } from 'react';
import Files from './Files'

class Task extends Component{
    render() {
        return (
            <div>
                <div>— {this.props.data.text}</div>
                <Files files={this.props.data.files}/>
            </div>
        );
    }
}

export default Task;