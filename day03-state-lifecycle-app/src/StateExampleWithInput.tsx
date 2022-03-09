import { Component } from "react";

interface IStateExample {
    title: string;
    message: string;
    name: string;
    subscribedToWhatsAppUpdates: boolean
}
class StateExampleWithInput extends Component<{}, IStateExample> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'State example with input',
            message: '',
            name: '',
            subscribedToWhatsAppUpdates: false
        };
        this.nameChanged = this.nameChanged.bind(this); //WILL EXPLAIN LATER
        this.buttonClicked = this.buttonClicked.bind(this); //WILL EXPLAIN LATER
        this.waUpdateChanged = this.waUpdateChanged.bind(this); //WILL EXPLAIN LATER
    }

    waUpdateChanged(e: any) {
        //let value = e.currentTarget.checked;
        let subscribedToWhatsAppUpdates = e.currentTarget.checked;
        this.setState({
            subscribedToWhatsAppUpdates
        });
    }

    buttonClicked() {
        //let waSubscription = this.state.subscribedToWhatsAppUpdates;
        let {subscribedToWhatsAppUpdates, name} = this.state;
        let message = `Hi ${name}!`;
        if(subscribedToWhatsAppUpdates) {
            message += ' You will receive updates on WhatsApp';
        }
        this.setState({
            message
        });
    }

    nameChanged(e: any) {
        console.log(e);
        //let currentValue = e.currentTarget.value;
        let name = e.currentTarget.value;
        this.setState({
            //name: currentValue
            name
        });
    }

    render() {
        let {title, message} = this.state;
        return (<div>
            <h1>{title}</h1>
            <input type="text" placeholder="Name" onChange={this.nameChanged}></input> <br/>
            <input type="checkbox" onChange={this.waUpdateChanged}></input><label>You want receive WhatsApp updates</label> <br/><br/>
            <button onClick={this.buttonClicked}>Click</button>
            <h3>{message}</h3>
        </div>);
    }
}
export default StateExampleWithInput;