// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SignIn.css'; // Import the CSS file for Signin

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Sign In</h1>
        <form>
          <div className="signin-form-group">
            <label htmlFor="username">USER NAME</label>
            <input type="text" id="username" required />
          </div>
          <div className="signin-form-group">
            <label htmlFor="email">EMAIL ID</label>
            <input type="email" id="email" required />
          </div>
          <div className="signin-form-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        
      </div>
    </div>
  );
}

export default Signin;
