import { useEffect, useState } from "react";

export const EffectHookExample = () => {
    console.log("Rendered");

    const [currentTime, setCurrentTime] = useState<string>('');
    const [temperature, setTemperature] = useState<string>('');


    useEffect(() => {
        if(currentTime === '' && temperature === '') {
            console.log('componentDidMount for time called');
        } else {
            console.log('componentDidUpdate for time called');
        } 
    }, [currentTime]); //passing the second argument is similar to shouldComponentUpdate

    useEffect(() => {
        if(currentTime === '' && temperature === '') {
            console.log('componentDidMount for temperature called');
        } else {
            console.log('componentDidUpdate for temperature called');
        } 
    }, [temperature]); //passing the second argument is similar to shouldComponentUpdate

    const getTemperatureButtonClicked = () => {
        setTemperature(Math.random() * 100 + '');
    };

    const getTimeButtonClicked = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };

    return (<div>
        <button onClick={getTimeButtonClicked}>Get time</button>
        <h2>{currentTime}</h2>
        <hr/>
        <button onClick={getTemperatureButtonClicked}>Get temperature</button> 
        <h2>{temperature}</h2>
        <hr/>
    </div>);
};