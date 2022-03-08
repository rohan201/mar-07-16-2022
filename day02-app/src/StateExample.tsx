import { Component } from "react";

//DEFINE
interface IMyState {
    now: string;
    temperature: number | string;
}

class StateExample extends Component<{}, IMyState> {
    constructor(props: {}) {
        super(props);
        //INITIALIZE
        this.state = {
            now: '',
            temperature: ''
        };
        this.getCurrentTime = this.getCurrentTime.bind(this); //WILL EXPLAIN LATER
        this.getCurrentTemperature = this.getCurrentTemperature.bind(this); //WILL EXPLAIN LATER
    }
    getCurrentTemperature() {
        let temp = Math.random() * 100;
        this.setState({
            temperature: temp
        });
    }

    getCurrentTime() {
        let currentTime = new Date().toLocaleTimeString();
        //this.state.now = currentTime;

        //MODIFY
        //Will automatically call render() method
        this.setState({
            now: currentTime
        });
    }

    render() {
        console.log("render called");
        return (<div>
            <button onClick={this.getCurrentTime}>Get time</button>
            <h2>{this.state.now}</h2>
            <hr/>
            <button onClick={this.getCurrentTemperature}>Get temperature</button>
            <h2>{this.state.temperature}</h2>
        </div>);
    }
}
export default StateExample;