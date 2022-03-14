import React, { Component } from "react";

interface IPersonFormProps {
    addHandler: (name: string, country: string) => boolean
}
export class PersonForm extends Component<IPersonFormProps, {message: string}> {
    private nameText: any;
    private countryDrpdown: any;

    constructor(props: IPersonFormProps) {
        super(props);
        
        this.nameText = React.createRef();
        this.countryDrpdown = React.createRef();

        this.state = {
            message: ''
        }
    }
    
    addPerson() {
        let name = this.nameText.current.value;
        let country = this.countryDrpdown.current.value;
        let added: boolean = this.props.addHandler(name, country);
        if(added) {
            this.setState({ message: 'Person added successfully' });
        } else {
            this.setState({ message: 'Person already found' });
        }
    }

    render() {
        return (<div>
            <label>Name</label>
            <input type="text" placeholder="Name" ref={this.nameText}></input> <br/>
            <label>Country</label>
            <select ref={this.countryDrpdown}>
                <option>--SELECT--</option>
                <option>India</option>
                <option>Ukraine</option>
                <option>Russia</option>
            </select>
            <br/>
            <button onClick={ () => this.addPerson() }>Add</button>
            <h3>{this.state.message}</h3>
        </div>);
    }
}