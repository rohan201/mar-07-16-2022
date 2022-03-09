class Game {
    private target: number;
    private _attempts: number;
    private _message: string;
    private _gameOver: boolean;

    constructor() {
        this.target = Math.round(Math.random() * 100);
        this._attempts = 0;
        this._message = '';
        this._gameOver = false;
    }

    public get gameOver() : boolean {
        return this._gameOver;
    }
    
    public get attempts(): number {
        return this._attempts;
    }

    public get message(): string {
        return this._message;
    }

    play(guess: number) {
        this._attempts++;
        if(guess > this.target) {
            this._message = 'Aim Lower';
        } else if(guess < this.target) {
            this._message = 'Aim Higher';
        } else {
            this._message = "You've got it!!!";
            this._gameOver = true;
        }
    }
}

export default Game;