import { Country } from "./Country";

export interface ILab03State {
    countries: Country[],
    countrySelected?: string
}