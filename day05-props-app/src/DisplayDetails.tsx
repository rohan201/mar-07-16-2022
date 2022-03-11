import { Component } from "react";

interface IDisplayDetailsProps {
    title: string, 
    year?: number
}

//export class DisplayDetails extends Component<{}, ISomeState> {}
export class DisplayDetails extends Component<IDisplayDetailsProps> {
    constructor(props: IDisplayDetailsProps) {
        super(props);
        console.log(props);
    }

    render() {
        // let {title} = this.props;
        // title = "jsdhfkjdhf";

        return (<div>
            <h4>{this.props.title}</h4>
            <h5>Current year is {this.props.year}</h5>
        </div>);
    }
}