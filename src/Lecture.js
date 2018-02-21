import React, { Component } from 'react';

class Lecture extends Component{

    render(){
        let data = this.props.data;
        return (
            <p>{data.name}</p>
        );
    }

}

export default Lecture;