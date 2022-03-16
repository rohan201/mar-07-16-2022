import { useCallback, useMemo, useState } from "react";
import { City } from "./City";

export const MemoAndCallbacksExample = () => {
    const i = 10;
    const[puneTemperature, setPuneTemperature] = useState<number>(0);
    const[chennaiTemperature, setChennaiTemperature] = useState<number>(0);

    //Memoization technique. If the value hasn't changed, just use the previous function from the memory
    //punetemperature is 45 fn {}
    //punetemperature is 45.5 fn {}
    //punetemperature is 50 fn {}
    const fetchPuneTemperatureButtonClicked = useCallback(() => {
        setPuneTemperature(Math.random() * 50);
    }, [puneTemperature, i]);

    const fetchChennaiTemperatureButtonClicked = useCallback(() => {
        setChennaiTemperature(Math.random() * 50);
    }, [chennaiTemperature]);

    return (<div>
        <City name="Pune" temperature={puneTemperature}/> 
        <button onClick={fetchPuneTemperatureButtonClicked}>Fetch Pune temperature</button>
        <hr/>
        <City name="Chennai" temperature={chennaiTemperature}/>
        <button onClick={fetchChennaiTemperatureButtonClicked}>Fetch Chennai temperature</button>
    </div>);
};