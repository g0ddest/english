import React, { Component } from 'react';
import Lecture from "./Lecture";

class Lectures extends Component{

    render(){
        return (
            <div className="Lectures-Wrap">
                {
                    this.props.data.map((item, index) => {
                        return (
                            <Lecture key={item.name} data={item}/>
                        )
                    })
                }
            </div>
        )
    }

}

export default Lectures;