import React, { Component } from 'react';
import Task from "./Task";
import "./Tasks.css"

class Tasks extends Component{

    render(){
        return (
            <div className="Tasks-Wrap">
                {this.props.data.map((item, index) => {
                    return (
                        <Task key={item.text} data={item} />
                    )
                })}
            </div>
        )
    }

}

export default Tasks;