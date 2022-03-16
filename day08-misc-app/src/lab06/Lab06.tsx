import { useEffect, useState } from "react";
import { CovidCountryInfo } from "./CovidCountryInfo";
import { CovidGrid } from "./CovidGrid";
import { Summary } from "./Summary";

export const Lab06 = () => {
    const [covidData, setCovidData] = useState<CovidCountryInfo[]>([]);
    const [covidSummaryDetails, setCovidSummaryDetails] = useState<CovidCountryInfo | undefined>(undefined);

    useEffect(() => {
        if(covidData.length === 0) {
            fetch('/coviddata')
            .then(response => response.json())
            .then((data: any[]) => {
                let arr: CovidCountryInfo[] = [];
                arr = data.map((it: CovidCountryInfo) => new CovidCountryInfo(it.country, it.cases, it.recovered, it.deaths));
                setCovidData(arr);
            });
        }
    });

    const showSummaryOfItem = (item: CovidCountryInfo) => {
        setCovidSummaryDetails(item);
    };

    return (<div>
        <CovidGrid covidData={covidData} itemClickedHandler={showSummaryOfItem}/>
        <hr/>
        {
            covidSummaryDetails !== undefined ?
            <Summary covidCountryDetails={covidSummaryDetails}/> : <span/>
        }
        
    </div>);
};