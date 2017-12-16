import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: 'June 18, 2018',
            newDate: ''
        }
    }

    changeDate(){
        this.setState({date: this.state.newDate})
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.date}</div>
                <Clock
                    date={this.state.date}
                />
                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        onChange={event => this.setState({newDate: event.target.value})}
                    />
                    <Button onClick={() => this.changeDate()}>
                        SET
                    </Button>
                </Form>
            </div>
        )

    }
}

export default App;