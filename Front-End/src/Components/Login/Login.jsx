/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
            <label htmlFor="username">USER NAME</label>
            <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="email">EMAIL ID</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
}

export default Login;
