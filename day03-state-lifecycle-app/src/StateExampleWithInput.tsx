import { Component } from "react";

interface IStateExample {
    title: string;
    message: string;
}
class StateExampleWithInput extends Component<{}, IStateExample> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'State example with input',
            message: ''
        };
    }
    render() {
        return (<div>
            <h1>{this.state.title}</h1>
            <input type="text" placeholder="Name"></input> <br/>
            <button>Click</button>
            <h3>{this.state.message}</h3>
        </div>);
    }
}
export default StateExampleWithInput;