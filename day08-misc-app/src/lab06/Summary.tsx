import { CovidCountryInfo } from "./CovidCountryInfo";

export const Summary = (props: { covidCountryDetails: CovidCountryInfo | undefined }) => {
    return (<div>
            <h3>{props.covidCountryDetails?.country}</h3>
            <h3>Cases: {props.covidCountryDetails?.cases}</h3>
            <h3>Recovered: {props.covidCountryDetails?.recovered}</h3>
            <h3>Deaths: {props.covidCountryDetails?.deaths}</h3>
    </div>);
};
