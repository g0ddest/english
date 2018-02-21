import React, { Component } from 'react';
import Lecture from "./Lecture";

class Lectures extends Component{

    render(){
        let lectures = this.props.data.map((item, index) => {
            return (
                <Lecture data={item}/>
            )
        });

        return (
            <div class="Lectures-Wrap">
                {lectures}
            </div>
        )
    }

}

export default Lectures;