// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Check for user cookie on mount
    const storedUsername = Cookies.get('username');
    const storedEmailId = Cookies.get('emailId'); // Retrieve emailId from cookies

    if (storedUsername && storedEmailId) {
      setIsLoggedIn(true);

    }
  }, []);

  const login = (username, emailId) => {
    Cookies.set('username', username);
    Cookies.set('emailId', emailId); // Store emailId in cookies
    setIsLoggedIn(true);
  
  };

  const logout = () => {

    Cookies.remove('username');
    Cookies.remove('emailId'); // Remove emailId from cookies on logout
    setIsLoggedIn(false);
 
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;