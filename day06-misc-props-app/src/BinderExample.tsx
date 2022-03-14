import { Component } from "react";

export class BinderExample extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {};
        this.getTimeButtonClicked = this.getTimeButtonClicked.bind(this);
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

    render() {
        return (<div>
            <button onClick={this.getTimeButtonClicked}>Get time</button>
            <button onClick={() => this.getTemperatureButtonClicked('Pune')}>Get temperature</button>
            <button onClick={this.getStockPriceButtonClicked.bind(this, 'INTUIT')}>Get stock price</button>
        </div>);
    }
}