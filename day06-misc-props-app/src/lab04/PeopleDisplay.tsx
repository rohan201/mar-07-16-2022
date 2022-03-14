import { Component } from "react";
import { Person } from "./Person";

interface IPeopleDisplayProps {
    people: Person[],
    removePersonsHandler: (persons: Person[]) => void
}

export class PeopleDisplay extends Component<IPeopleDisplayProps> {
    private peopleSelectedForRemoval: Person[]
    
    constructor(props: IPeopleDisplayProps) {
        super(props);
        this.peopleSelectedForRemoval = [];
    }

    personChecked(e: React.ChangeEvent<HTMLInputElement>, person: Person) {
        let selected = e.currentTarget.checked;
        if(selected) {
            this.peopleSelectedForRemoval.push(person);
        } else {
            this.peopleSelectedForRemoval = this.peopleSelectedForRemoval.filter(it => it.name !== person.name && it.country !== person.country);
        }
    }

    getPeopleRows() {
        let { people } = this.props;
        let peopleInJsx: any = [];
        peopleInJsx = people.map(it => <tr key={`${it.name}_${it.country}`}>
            <td>{it.name}</td>
            <td>{it.country}</td>
            <td><input type="checkbox" onChange={(e) => this.personChecked(e, it)}></input></td>
        </tr>);
        return peopleInJsx;
    }

    removePersonsButtonClicked() {
        this.props.removePersonsHandler(this.peopleSelectedForRemoval);
    }

    render() {
        return (<div style={{display: this.props.people.length > 0 ? 'block' : 'none'}}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getPeopleRows()}
                </tbody>
            </table>
            <br/>
            <button onClick={() => this.removePersonsButtonClicked()}>Remove</button>
        </div>);
    }
}