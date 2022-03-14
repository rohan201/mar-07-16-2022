import React, { Component } from "react";

export class BinderExample extends Component<{}, {}> {
    private guessTextbox: any;
    private playButton: any;
    private mainDiv: any;

    constructor(props: {}) {
        super(props);
        this.state = {};
        this.getTimeButtonClicked = this.getTimeButtonClicked.bind(this);
        
        this.guessTextbox = React.createRef();
        this.playButton = React.createRef();
        this.mainDiv = React.createRef();
    }
    getTimeButtonClicked() {
        console.log(this.state);
    }
    getTemperatureButtonClicked(city: string) {
        console.log(city);
    }
    getStockPriceButtonClicked(stock: string) {
        console.log(this.state, stock);
    }
    playButtonClicked() {
        let guess = this.guessTextbox.current.value;
        console.log(guess);
        this.playButton.current.disabled = "true";
        this.mainDiv.current.style.backgroundColor = 'yellow';
    }

    render() {
        return (<div ref={this.mainDiv}>
            <input type="text" placeholder="Guess" ref={this.guessTextbox}></input> <br/>
            <button onClick={() => this.playButtonClicked()} ref={this.playButton}>Play</button>
            <hr/>
            <button onClick={this.getTimeButtonClicked}>Get time</button>
            <button onClick={() => this.getTemperatureButtonClicked('Pune')}>Get temperature</button>
            <button onClick={this.getStockPriceButtonClicked.bind(this, 'INTUIT')}>Get stock price</button>
        </div>);
    }
}