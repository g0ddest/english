import React, { Component } from 'react';
import Lecture from "./Lecture";
import './Lectures.css'

class Lectures extends Component{

    render(){

        let first;
        let second;

        if(this.props.data.filter(l => l.subgroup === 1).length)
            first = <div className="subgroup first"><div>1</div><span> подгруппа</span></div>;

        if(this.props.data.filter(l => l.subgroup === 2).length)
            second = <div className="subgroup second"><div>2</div><span> подгруппа</span></div>;

        return (
            <div className="Lectures-Wrap">
                {
                    this.props.data.filter(l => l.subgroup == null).map((item, index) => {
                        return (
                            <Lecture key={item.name} data={item}/>
                        )
                    })
                }

                {first}

                {
                    this.props.data.filter(l => l.subgroup === 1).map((item, index) => {
                        return (
                            <Lecture key={item.name} data={item}/>
                        )
                    })
                }

                {second}

                {
                    this.props.data.filter(l => l.subgroup === 2).map((item, index) => {
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