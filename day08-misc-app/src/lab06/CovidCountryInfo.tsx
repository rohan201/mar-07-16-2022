export class CovidCountryInfo {
    constructor(public readonly country: string, 
        public cases: number, 
        public recovered: number, 
        public deaths: number) {
    }
}