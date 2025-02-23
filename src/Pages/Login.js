import React, { useState } from "react";
import '../styles/Login.css';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <form>
                    {!isLogin && <input type="text" placeholder="Full Name" required />} 
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">{isLogin ? "Login" : "Register"}</button>
                </form>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Register" : "Already registered? Login"}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
