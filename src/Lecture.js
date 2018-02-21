import React, { Component } from 'react';
import './Lecture.css';

class Lecture extends Component{

    render(){
        let data = this.props.data;
        return (
            <div class="Lecture">
                <h2>{data.name}</h2>
            </div>
        );
    }

}

export default Lecture;