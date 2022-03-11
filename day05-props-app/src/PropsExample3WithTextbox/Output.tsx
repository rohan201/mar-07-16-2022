import { Component } from "react";

interface IOutputProps {
    message: string
}
export class Output extends Component<IOutputProps> {
    render() {
        return (<div>
            <h2>{this.props.message}</h2>
        </div>);
    }
}