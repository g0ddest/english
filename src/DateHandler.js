import React, { Component } from 'react';

class DateHandler extends Component{

    handleClick(){
        this.props.click(this.props.date);
    };

    decorate(date){
            console.log(date);
            return new Date(Date.parse(date)).toLocaleDateString('ru-RU', {
                day : 'numeric',
                month: 'long',
                year : 'numeric'
            });
    }

    render() {
        if(!this.props.date)
            return null;
        if(this.props.now)
            return (
                <div>{this.decorate(this.props.date)}</div>
            );
        else
            return (
                <div onClick={this.handleClick.bind(this)}>{this.decorate(this.props.date)}</div>
            );
    }
}

export default DateHandler;