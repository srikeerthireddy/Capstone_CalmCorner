// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/!.jpg';
import profileImage from '../images/profile.png'; // Path to the profile image
import './Header.css';
import AuthContext from '../AuthContext/AuthContext';

function Header() {
  const { isLoggedIn, logout, username, emailId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  return (
    <header className='header'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <nav className='nav'>
        <NavLink to="/" exact className='nav-link'>HOME</NavLink>
        <NavLink to="/aboutus" className='nav-link'>ABOUT US</NavLink>
        <NavLink to="/wellnesshub" className='nav-link'>WELLNESS-HUB</NavLink>
        {isLoggedIn ? (
          <div className="user-actions">
            <div className="user-info">
              <img 
                src={profileImage} 
                alt="User" 
                className="profile-image" 
                onClick={toggleUserDetails} 
              />
              {showUserDetails && (
                <div className="user-details">
                  <p>{username}</p>
                  <p>{emailId}</p>
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <NavLink to="/login" className='nav-link'>LOGIN</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
