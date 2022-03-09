import React, { Component } from "react";
import Game from "./Game";
import ILab02State from "./ILab02State";

class Lab02 extends Component<{}, ILab02State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            game: new Game(),
            guess: 0,
            guessInputValid: true
        };
        this.guessChanged = this.guessChanged.bind(this);
        this.playButtonClicked = this.playButtonClicked.bind(this);
    }

    playButtonClicked() {
        let { guess, game } = this.state;
        game.play(guess);
        this.setState({}); //You need to call this to refresh UI 
        //this.render(); //BAD PRACTICE
    }

    guessChanged(e: React.ChangeEvent<HTMLInputElement>) {
        let guess = parseInt(e.currentTarget.value);
        if(guess > 0 && guess <= 100) {
            this.setState({ guess, guessInputValid: true });
        } else {
            this.setState({
                guessInputValid: false
            });
        }
    }

    render() {
        let { attempts, message, gameOver } = this.state.game;
        return (<div>
            <h1>Welcome to the guessing game. Enter a number between 1 and 100</h1>
            <input type="number" placeholder="Enter your guess" onChange={this.guessChanged}></input> <br/>
            <h6 style={{color: 'red', display: this.state.guessInputValid ? 'none' : 'block'}}>Invalid input</h6>
            <button disabled={gameOver} onClick={this.playButtonClicked}>Play</button>
            <h2>{message}</h2>
            <h3 style={{display: attempts > 0 ? 'block': 'none'}}>Attempts: {attempts}</h3>
        </div>);
    }
}
export default Lab02;