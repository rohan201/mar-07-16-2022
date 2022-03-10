import React, { Component } from "react";
import { City } from "./City";
import { Country } from "./Country";
import { ILab03State } from "./ILab03State";


export class Lab03 extends Component<{}, ILab03State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        let countries: any = [];
        if(localStorage.getItem("countries")) {
            countries = JSON.parse(localStorage.getItem("countries") || "");
            countries = countries as Country[]; //Typecase in TS
            this.setState({
                countries
            });
        } else {
            //Ideally load from server
            fetch('/data.json')
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    countries = JSON.parse(response.countries || "");
                    countries = countries as Country[];
                    this.setState({
                        countries
                    });
                    localStorage.setItem("countries", response);
                })
                .catch(error => console.log(error));

            // countries = [
            //     new Country("India", [new City("Pune"), new City("Bengaluru"), new City("Chennai")]),
            //     new Country("England", [new City("London"), new City("Bristol"), new City("Cambridge")]),
            //     new Country("US", [new City("Houston"), new City("NJ"), new City("Dallas")])
            // ];
            // localStorage.setItem("countries", JSON.stringify(countries));
        }
        
       
        this.countryChanged = this.countryChanged.bind(this); //WILL EXPLAIN LATER
    }

    countryChanged(e: React.ChangeEvent<HTMLSelectElement>) {
        let countrySelected = e.currentTarget.value;
        this.setState({ countrySelected });
    }

    getCountries() {
        let {countries} = this.state;
        let countriesInJsx: any = [];
        countriesInJsx = countries.map(it => <option key={it.name}>{it.name}</option>);
        return countriesInJsx;
    }

    populateCities() {
        let {countries, countrySelected} = this.state;
        let citiesInJsx: any = [];
        if(countrySelected !== '--SELECT--') {
            let cities = countries.find(it => it.name === countrySelected)?.cities;
            cities?.forEach(city => {
                citiesInJsx.push(<option key={city.name}>{city.name}</option>);
            });
        }
        return citiesInJsx;
    }

    render() {
        return (<div>
            <label>Country</label>
            <select onChange={this.countryChanged}>
                <option>--SELECT--</option>
                {this.getCountries()}
            </select> <br/>
            <label>City</label>
            <select>
                <option>--SELECT--</option>
                {this.populateCities()}
            </select>
        </div>);
    }
}