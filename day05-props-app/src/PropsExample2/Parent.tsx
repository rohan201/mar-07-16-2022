import { Component } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

interface IParentState {
    currentTime: string;
}
export class Parent extends Component<{}, IParentState> {
    constructor(props: {}) {
        super(props);
        this.state = { currentTime: '' };
        this.computeTime = this.computeTime.bind(this);
    }
    computeTime() {
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (<div>
            <Input timeHandler={this.computeTime}/>
            <hr/>
            <Output message={this.state.currentTime}/>
        </div>);
    }
}