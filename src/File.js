import React, { Component } from 'react';
import './File.css';

class File extends Component{
    render(){
        return (
            <span className="File">
                <a href={this.props.path}>{this.props.name}</a>
            </span>
        );
    }
}

export default File;

