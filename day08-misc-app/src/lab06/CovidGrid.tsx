import { CovidCountryInfo } from "./CovidCountryInfo";
import { CovidCountryItem } from "./CovidCountryItem";

interface ICovidGridProps {
    covidData: CovidCountryInfo[],
    itemClickedHandler: (item: CovidCountryInfo) => void
}
export const CovidGrid = (props: ICovidGridProps) => {

    const covidItemClicked = (item: CovidCountryInfo) => {
        props.itemClickedHandler(item);
    }

    return (<div>
        <table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Cases</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.covidData.map(it => <CovidCountryItem key={it.country} item={it} itemClickedHandler={covidItemClicked}/>)
                }
            </tbody>
        </table>
    </div>);
};