import React, { Component } from 'react';
import './Lecture.css';
import Tasks from "./Tasks";
import Person from "./Person";

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
            <div className="Lecture">
                <h2><span>{this.lecture_num()}</span>{data.name}</h2>
                <Person data={data.teacher}/>
                <Tasks data={data.task}/>
            </div>
        );
    }

}

export default Lecture;