/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import Cookies from 'js-cookie';
function Login() {
  const [loginUser, setLoginUser] = useState({
    username: '',
    emailId: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e, field) => {
    setLoginUser({ ...loginUser, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5226/api/users/login', loginUser);
      setMessage(response.data.message);
      setIsSuccess(response.status === 200);
      console.log("User logged in successfully!...");
      // localStorage.setItem('token', response.data.token);
      // Cookies.set('token', response.data.token);
      if(response.status==200){
        console.log("successful login",loginUser.username)
        Cookies.set("username",loginUser.username);
      }
    } catch (error) {
      setMessage(error.response.data.message);
      setIsSuccess(false);
      console.error('An error occurred while logging in', error);
    }
  };

  return (
    <div className="login-container">
      
      <div className="login-box">
      {message && (
        <div className="message-succ">
          <div className={`message ${isSuccess ? 'success' : 'error'}`}>
            <p>{message}</p>
          </div>
        </div>
      )}
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">USER NAME</label>
            <input
              type="text"
              id="username"
              value={loginUser.username}
              onChange={(e) => handleChange(e, 'username')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL ID</label>
            <input
              type="email"
              id="email"
              value={loginUser.emailId}
              onChange={(e) => handleChange(e, 'emailId')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={loginUser.password}
              onChange={(e) => handleChange(e, 'password')}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="sign">Don't have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
}

export default Login;
