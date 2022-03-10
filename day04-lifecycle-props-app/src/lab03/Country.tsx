import { City } from "./City";

export class Country {
    constructor(public name: string, public cities: City[]) {}
}
