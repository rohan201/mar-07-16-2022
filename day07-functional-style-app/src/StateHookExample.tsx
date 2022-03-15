import { useState } from "react";

export const StateHookExample = () => {
    const [currentTime, setCurrentTime] =  useState<string>('');
    const [temperature, setTemperature] = useState<string>('');
    const [stockPrice, setStockPrice] = useState<number>(100.02);

    const getTimeButtonClicked = () => {
        let now = new Date().toLocaleTimeString();
        setCurrentTime(now);
    };

    const getTemperatureButtonClicked = () => {
        let temp = Math.random() * 100;
        setTemperature(temp + '');
    };

    return (<div>
        <button onClick={getTimeButtonClicked}>Get time</button>
        <h2>{currentTime}</h2>
        <hr/>
        <button onClick={getTemperatureButtonClicked}>Get temperature</button> 
        <h2>{temperature}</h2>
        <hr/>
        <button onClick={() => setStockPrice(Math.random() * 100)}>Get stock price of Intuit</button>
        <h2>{stockPrice}</h2>
    </div>);
};