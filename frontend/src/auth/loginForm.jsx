import React, {useState} from "react";
import './authForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <div className="login-card">
            <form className="login-form">
            <h2>Login</h2>
                <div className="email-form">
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="password-form">
                    <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginForm