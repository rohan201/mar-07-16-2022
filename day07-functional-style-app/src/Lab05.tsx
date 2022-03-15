import { useRef, useState } from "react";

export const Lab05 = () => {
    const [userNameValue, setUserNameValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loginStatus, setLoginStatus] = useState<boolean>(false);

    const password: any = useRef();

    const loginButtonClicked = () => {
        if(userNameValue === 'admin' && password.current.value === 'admin123') {
            setMessage('Logging in...');
            setLoginStatus(true);
        } else {
            setMessage('Incorrect username or password');
        }
    };
    

    return (<div>
        <input type="text" placeholder="Username" onChange={(e) => setUserNameValue(e.currentTarget.value)}></input> <br/>
        <input type="password" placeholder="Password" ref={password}></input> <br/>
        <button disabled={loginStatus} onClick={loginButtonClicked}>Login</button>
        <h3 style={{color: loginStatus ? 'green' : 'red'}}>{message}</h3>
    </div>);
};