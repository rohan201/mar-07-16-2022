import { Component } from "react";

export class Input extends Component<{}> {
    constructor(props: {}) {
        super(props);
        this.getTime = this.getTime.bind(this);
    }

    getTime() {

    }
    
    render() {
        return (<div>
            <button onClick={this.getTime}>Get time</button>
        </div>);
    }
}