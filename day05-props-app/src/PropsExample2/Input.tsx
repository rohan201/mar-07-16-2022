import { Component } from "react";

interface IInputProps {
    timeHandler: () => void;
}

export class Input extends Component<IInputProps> {
    constructor(props: IInputProps) {
        super(props);
        this.getTimeButtonClicked = this.getTimeButtonClicked.bind(this);
    }

    getTimeButtonClicked() {
        this.props.timeHandler();
    }

    render() {
        return (<div>
            <button onClick={this.getTimeButtonClicked}>Get time</button>
        </div>);
    }
}