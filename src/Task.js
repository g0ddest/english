import React, { Component } from 'react';
import Files from './Files'
import Videos from './Videos'

class Task extends Component{
    render() {
        return (
            <div>
                <div>— {this.props.data.text}</div>
                <Files files={this.props.data.files}/>
                <Videos videos={this.props.data.videos} />
            </div>
        );
    }
}

export default Task;