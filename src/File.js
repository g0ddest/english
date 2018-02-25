import React, { Component } from 'react';
import './File.css';

class File extends Component{
    render(){
        return (
            <div className="File">
                <div className="type">{this.props.type}</div>
                <div className="name"><a href={this.props.path}>{this.props.name}</a></div>
            </div>
        );
    }
}

export default File;

