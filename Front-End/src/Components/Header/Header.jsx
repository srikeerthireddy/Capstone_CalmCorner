import { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/!.jpg";
import profileImage from "../images/profile.png";
import "./Header.css";
import AuthContext from "../AuthContext/AuthContext";
import Cookies from "js-cookie";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "", emailId: "" });
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
      console.error(
        "Error decoding token or fetching user information:",
        error
      );
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
    setUserDetails({ username: "", emailId: "" }); // Clear user details
    navigate("/");
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

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" exact className="nav-link">
          HOME
        </NavLink>
        <NavLink to="/aboutus" className="nav-link">
          ABOUT US
        </NavLink>
        <NavLink to="/wellnesshub" className="nav-link">
          WELLNESS-HUB
        </NavLink>
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
                <div className="user-details" ref={userRef}>
                  <p>{userDetails.username}</p>
                  <p>{userDetails.emailId}</p>
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <NavLink to="/login" className="nav-link">
            LOGIN
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;