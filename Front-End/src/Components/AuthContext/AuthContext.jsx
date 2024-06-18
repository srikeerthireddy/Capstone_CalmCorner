// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');

  useEffect(() => {
    // Check for user cookie on mount
    const storedUsername = Cookies.get('username');
    const storedEmailId = Cookies.get('emailId'); // Retrieve emailId from cookies

    if (storedUsername && storedEmailId) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setEmailId(storedEmailId); // Set emailId if available
    }
  }, []);

  const login = (username, emailId) => {
    Cookies.set('username', username);
    Cookies.set('emailId', emailId); // Store emailId in cookies
    setIsLoggedIn(true);
    setUsername(username);
    setEmailId(emailId);
  };

  const logout = () => {
    const loggedOutUsername = username; // Capture username before clearing state
    Cookies.remove('username');
    Cookies.remove('emailId'); // Remove emailId from cookies on logout
    setIsLoggedIn(false);
    setUsername('');
    setEmailId(''); // Clear emailId from state
    console.log(`User ${loggedOutUsername} logged out successfully!`);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username, emailId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


