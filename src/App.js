import React, { Component } from 'react';
import Lectures from './Lectures';
import './App.css';
import DateHandler from "./DateHandler";

class App extends Component {

    constructor(){
        super();
        this.state = {
            all_dates: [],
            lectures: [],
            props: {
                selected_date: null,
                next_date: null,
                prev_date: null
            }
        };
        this.load_data();
    }

    load_data(){

        let put_data = this.put_data;
        let self = this;
        fetch("sch.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                put_data(self, response);
            })
    }

    put_data(self, data){

        let dates = data.map((item, index) => {
            return item.date
        });

        let i = 0;
        while (Date.parse(dates[i] + " 19:30") - new Date().getTime() <= 0){
            i++;
        }

        let prev_date = null;
        if(i >= 1) prev_date = dates[i-1];
        let next_date = null;
        if(dates.length >= i+2) next_date = dates[i+1];

        self.setState({
            all_dates: data,
            props: {
                selected_date: dates[i],
                prev_date: prev_date,
                next_date: next_date
            },
            lectures: data.filter((item) => item.date === dates[i])[0].lessons
        });
    }


    set(date){
        let index = this.state.all_dates.findIndex((item) => item.date === date);
        let all = this.state.all_dates;
        this.setState({
            all_dates: all,
            props: {
                selected_date: all[index].date,
                prev_date: index > 0 ? all[index - 1].date : null,
                next_date: index <= all.length - 2 ? all[index + 1].date : null
            },
            lectures: all[index].lessons,
        });
    }

    render() {
        return (
            <div className="App">
                <header className="header">
                    <DateHandler click={this.set.bind(this)} date={this.state.props.prev_date}/>
                    <DateHandler now={true} date={this.state.props.selected_date} />
                    <DateHandler click={this.set.bind(this)} date={this.state.props.next_date}/>
                </header>
                <div className="details">
                    <Lectures data={this.state.lectures}/>
                </div>
            </div>
        );
    }
}

export default App;
