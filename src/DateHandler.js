import React, { Component } from 'react';
import './DateHandler.css'

class DateHandler extends Component{

    handleClick(){
        this.props.click(this.props.date);
    };

    decorate(date){
            return new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
                day : 'numeric',
                month: 'long',
                year : 'numeric'
            });
    }

    render() {
        if(!this.props.date)
            return (
                <div className={this.props.position}> </div>
            );
        if(this.props.now)
            return (
                <div className="now">{this.decorate(this.props.date)}</div>
            );
        else
            return (
                <div className={this.props.position} onClick={this.handleClick.bind(this)}>
                    {this.props.position === "left" ? "← " : ""}
                    <span>{this.decorate(this.props.date)}</span>
                    {this.props.position === "right" ? " →" : ""}
                </div>
            );
    }
}

export default DateHandler;