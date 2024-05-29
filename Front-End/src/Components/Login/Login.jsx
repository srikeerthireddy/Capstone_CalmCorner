/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">USER NAME</label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL ID</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="sign">Don't have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
}

export default Login;
