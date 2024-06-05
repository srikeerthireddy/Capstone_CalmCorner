// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css'; 

function Signin() {
  const [signInUser, setSignInUser] = useState({
    username: '',
    emailId: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e, field) => {
    setSignInUser({ ...signInUser, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5226/api/users/signin', signInUser);
    
      setMessage(response.data.message);
      setIsSuccess(response.status === 201);
     
      console.log("User signin sucessfull")
    } catch (error) {
      setMessage(error.response.data.message);
      setIsSuccess(false);
      console.error('An error occurred while signing in', error);
    }
  };

  return (
    <div className="signin-container">
      
      <div className="signin-box">
        <div className='message-succ'>
        {message && (
        <div className={`message ${isSuccess ? 'success' : 'error'}`}>
          <p>{message}</p>
        </div>
           )}
        </div>
      
   
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="signin-form-group">
            <label htmlFor="username">USER NAME</label>
            <input
              type="text"
              id="username"
              value={signInUser.username}
              onChange={(e) => handleChange(e, 'username')}
              required
            />
          </div>
          <div className="signin-form-group">
            <label htmlFor="email">EMAIL ID</label>
            <input
              type="email"
              id="email"
              value={signInUser.emailId}
              onChange={(e) => handleChange(e, 'emailId')}
              required
            />
          </div>
          <div className="signin-form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={signInUser.password}
              onChange={(e) => handleChange(e, 'password')}
              required
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
