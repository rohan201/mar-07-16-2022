import { Component } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

export class Parent extends Component {
    render() {
        return (<div>
            <Input/>
            <hr/>
            <Output message=''/>
        </div>);
    }
}