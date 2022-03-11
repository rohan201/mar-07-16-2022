import React, { Component } from "react";

interface IInputProps {
    nameHandler: (name: string) => void;
}
interface IInputState {
    name: string;
}

export class Input extends Component<IInputProps, IInputState> {
    constructor(props: IInputProps) {
        super(props);
        this.state = {
            name: ''
        };
        this.buttonClicked = this.buttonClicked.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged(e: React.ChangeEvent<HTMLInputElement>) {
        let name = e.currentTarget.value;
        this.setState({ name });
    }

    buttonClicked() {
        this.props.nameHandler(this.state.name);
    }

    render() {
        return (<div>
            <input type="text" placeholder="Name" onChange={this.nameChanged}></input> <br/>
            <button onClick={this.buttonClicked}>Click</button>
        </div>);
    }
}