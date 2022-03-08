import { Component } from "react";
import './Lab01.css';

interface ILab01State {
    message: string;
    loginSuccess: boolean;
    cssMessageClass: string;
}

class Lab01UsingState extends Component<{}, ILab01State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            message: '',
            loginSuccess: false,
            cssMessageClass: ''
        };
        this.login = this.login.bind(this);
    }
    login() {
        let userNameElem: any = document.getElementById("username");
        let userName = userNameElem != null ? userNameElem?.value : ''; //NOT RECOMMENDED
        let passwordElem: any = document.getElementById("password");
        let password = passwordElem != null ? passwordElem.value : ''; //NOT RECOMMENDED

        if(userName === "admin" && password === "admin123") {
            this.setState({
                message: 'Logging in...',
                loginSuccess: true,
                cssMessageClass: 'correct'
            });
        } else {
            this.setState({
                message: 'Incorrect username or password',
                cssMessageClass: 'incorrect'
            });
        }

 
    }

    render() {
        return (<div>
            <input type="text" placeholder="Username" id="username"></input> <br/>
            <input type="password" placeholder="Password" id="password"></input> <br/>
            <button disabled={this.state.loginSuccess} onClick={this.login}>Login</button>
            <h2 className={this.state.cssMessageClass}>{this.state.message}</h2>
        </div>);
    }
}

export default Lab01UsingState;