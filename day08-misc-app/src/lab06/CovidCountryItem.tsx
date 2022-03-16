import { CovidCountryInfo } from "./CovidCountryInfo";

interface ICovidCountryItemProps {
    item: CovidCountryInfo,
    itemClickedHandler: (item: CovidCountryInfo) => void
}

export const CovidCountryItem = (props: ICovidCountryItemProps) => {
    let {country, cases} = props.item;

    return (<tr onMouseOver={() => props.itemClickedHandler(props.item)} 
                style={{backgroundColor: props.item.deaths > 5000 ? 'red' : 'white'}}>
        <td>{country}</td>
        <td>{cases}</td>
    </tr>);
}