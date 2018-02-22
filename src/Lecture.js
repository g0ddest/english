import React, { Component } from 'react';
import './Lecture.css';

class Lecture extends Component{

    lecture_num(){
        if(this.props.data.number.length === 1)
            return this.props.data.number[0] + ". ";
        if(this.props.data.number.length > 1)
            return this.props.data.number[0] + "–" + this.props.data.number[this.props.data.number.length - 1] + ". ";
        return "";
    }

    render(){
        let data = this.props.data;
        return (
            <div class="Lecture">
                <h2><span>{this.lecture_num()}</span>{data.name}</h2>
            </div>
        );
    }

}

export default Lecture;