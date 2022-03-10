import { Component } from "react";


class AsyncState extends Component<{}, { currentTime: string }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: ''
        };
        this.getTime = this.getTime.bind(this);
    }

    getTime() {
        let now = new Date().toLocaleTimeString();
        //A bad way to do something immediately after setState
        //this.setState({ currentTime: now }); //setState executes asynchronously
        //console.log(this.state.currentTime);

        this.setState(
            { currentTime: now }, 
            () => console.log(this.state.currentTime) //callback function
        );

    }

    render() {
        console.log("render called");
        return (<div>
            <button onClick={this.getTime}>Get time</button>
            <h2>{this.state.currentTime}</h2>
        </div>);
    }
}

export default AsyncState;