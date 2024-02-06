import React, {useState} from "react";
import './authForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <div>
            <form>
            <h2>Login</h2>
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginForm