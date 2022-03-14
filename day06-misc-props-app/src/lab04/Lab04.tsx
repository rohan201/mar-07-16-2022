import { Component } from "react";
import { ILab04State } from "./ILab04State";
import { PeopleDisplay } from "./PeopleDisplay";
import { Person } from "./Person";
import { PersonForm } from "./PersonForm";

export class Lab04 extends Component<{}, ILab04State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            people: []
        };
    }

    addPerson(name: string, country: string): boolean {
        let { people } = this.state;
        let existingPerson: Person | undefined = people.find(it => it.name === name && it.country === country);
        if(!existingPerson) {
            people.push(new Person(name, country));
            this.setState({ people });
            return true;            
        }
        return false;
    }

    removePersons(personsToBeRemoved: Person[]) {
        let { people } = this.state;
        let newSetOfPeople: Person[] = [];
        people.forEach(it => {
            if(!personsToBeRemoved.find(person => person.name === it.name && person.country === it.country)) {
                newSetOfPeople.push(it);    
            }
        });
        this.setState({ people: newSetOfPeople });
    }

    render() {
        return(<div>
            <PersonForm addHandler={this.addPerson.bind(this)}/>
            <hr/>
            <PeopleDisplay people={this.state.people} removePersonsHandler={this.removePersons.bind(this)}/>
        </div>);
    }
}