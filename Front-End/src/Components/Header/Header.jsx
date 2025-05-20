import { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/!.jpg";
import profileImage from "../images/profile.png";
import AuthContext from "../AuthContext/AuthContext";
import Cookies from "js-cookie";
import "./Header.css";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "", emailId: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const userRef = useRef();

  const fetchUserDetails = async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        if (decodedToken.username) {
          const { username, emailId } = decodedToken;
          setUserDetails({ username, emailId });
        } else {
          console.error("Decoded token does not contain a valid username.");
          setUserDetails({ username: "", emailId: "" });
        }
      }
    } catch (error) {
      console.error("Error decoding token or fetching user information:", error);
      setUserDetails({ username: "", emailId: "" });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserDetails();
    } else {
      setUserDetails({ username: "", emailId: "" });
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    setUserDetails({ username: "", emailId: "" });
    navigate("/");
    setMenuOpen(false);
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const handleClickOutside = (event) => {
    if (userRef.current && !userRef.current.contains(event.target)) {
      setShowUserDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <NavLink to="/" className="logo-link">
              <img src={logo} alt="Calm Corner Logo" className="logo-image" />
              <span className="logo-text">Calm Corner</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              HOME
            </NavLink>
            <NavLink 
              to="/aboutus" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink 
              to="/wellnesshub" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              WELLNESS-HUB
            </NavLink>
            
            {isLoggedIn ? (
              <div className="user-profile" ref={userRef}>
                <button
                  onClick={toggleUserDetails}
                  className="profile-button"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                  />
                  <span className="username">
                    {userDetails.username}
                  </span>
                  <svg
                    className={`dropdown-arrow ${showUserDetails ? "rotate" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                
                {showUserDetails && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <p className="dropdown-username">{userDetails.username}</p>
                      <p className="dropdown-email">{userDetails.emailId}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="logout-button"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="get-started-button"
              >
                Get Started
              </NavLink>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button
              onClick={toggleMenu}
              className="hamburger-button"
            >
              <svg
                className="hamburger-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/wellnesshub"
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              WELLNESS-HUB
            </NavLink>
            
            {isLoggedIn ? (
              <div className="mobile-user-section">
                <div className="mobile-user-info">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="mobile-profile-image"
                  />
                  <div className="mobile-user-details">
                    <div className="mobile-username">{userDetails.username}</div>
                    <div className="mobile-email">{userDetails.emailId}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="mobile-logout-button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="mobile-get-started"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;