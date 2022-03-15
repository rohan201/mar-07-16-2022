import { useRef, useState } from "react";

interface IState {
    currentTime?: string;
    temperature?: string;
}

export const StateHookExample2 = () => {

    const [myState, setMyState] = useState<IState>({currentTime: '', temperature: ''});
    const timeBtn: any = useRef(); //React.createRef();

    const getTemperatureButtonClicked = () => {
        let temperature = Math.random() * 100 + '';
        setMyState({ currentTime: myState.currentTime, temperature });
    };

    const getTimeButtonClicked = () => {
        const actualBtn = timeBtn.current;
        setMyState({ currentTime: new Date().toLocaleTimeString(), temperature: myState.temperature });
    };

    return (<div>
        <button onClick={getTimeButtonClicked} ref={timeBtn}>Get time</button>
        <h2>{myState.currentTime}</h2>
        <hr/>
        <button onClick={getTemperatureButtonClicked}>Get temperature</button> 
        <h2>{myState.temperature}</h2>
        <hr/>
    </div>);
};