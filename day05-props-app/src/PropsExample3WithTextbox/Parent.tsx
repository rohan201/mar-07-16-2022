import { Component } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

interface IParentState {
    message: string;
}
export class Parent extends Component<{}, IParentState> {
    constructor(props: {}) {
        super(props);
        this.state = { message: '' };
        this.computeMessage = this.computeMessage.bind(this);
    }
    
    computeMessage(name: string) {
        this.setState({
            message: `Hi ${name}`
        });
    }
    render() {
        return (<div>
            <Input nameHandler={this.computeMessage}/>
            <hr/>
            <Output message={this.state.message}/>
        </div>);
    }
}