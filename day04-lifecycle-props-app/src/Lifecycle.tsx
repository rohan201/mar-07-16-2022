import { Component } from "react";

class Lifecycle extends Component<{}, {message: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
          message: ''  
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    //Called only once for every component after it's rendered
    //Send a request to the server and fetch several records
    componentDidMount() {
        console.log("componentDidMount called");
    }

    //Called everytime after the state is updated
    //Invoked after render() method is called
    //Can be used to perform Cache/Local storage kind of operations without disturbing the UI
    componentDidUpdate() {
        console.log("componentDidUpdate called");  
    }

    //Used to optimize virtual DOM updates.
    //Compare the current state with the previous state and check if you want to go ahead and update the UI
    shouldComponentUpdate(obj: any, latest: { message: string }): boolean {
        console.log("shouldComponentUpdate called");
        if (latest.message === this.state.message) {
            console.log("No change in state values");
            return false;
        } else {
            console.log("State values have changed", latest.message, this.state.message);
        }
		return true;
    }

    buttonClicked() {
        console.log("buttonClicked called")
        this.setState({
            message: new Date().toLocaleTimeString()
        });
    }
    
    render() {
        console.log("render called");
        return (<div>
            <button onClick={this.buttonClicked}>Click</button>
            <h1>{ this.state.message }</h1>    
        </div>);
    }
}

export default Lifecycle;