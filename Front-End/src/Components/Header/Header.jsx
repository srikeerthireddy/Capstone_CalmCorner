import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import AuthContext from "../AuthContext/AuthContext"; // Import AuthContext
import Cookies from "js-cookie";

export default function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext); // Use AuthContext
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "", emailId: "" });
  const userRef = useRef(null);

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
    logout(); // Use logout from AuthContext
    setUserDetails({ username: "", emailId: "" });
    setShowUserDetails(false);
    setIsMenuOpen(false);
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white">
            <Brain className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
            Calm Corner
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-slate-700 hover:text-purple-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-slate-700 hover:text-purple-600 font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/wellnesshub"
            className="text-slate-700 hover:text-purple-600 font-medium transition-colors"
          >
            Wellness Hub
          </Link>

          {isLoggedIn ? (
            <div className="relative" ref={userRef}>
              <button
                onClick={toggleUserDetails}
                className="flex items-center space-x-2 text-slate-700 hover:text-purple-600 transition-colors"
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white border border-slate-200">
                  {userDetails.username.charAt(0)}
                </div>
                <span className="font-medium">{userDetails.username}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showUserDetails ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showUserDetails && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl p-4 border border-slate-200 animate-in fade-in-50 zoom-in-95">
                  <div className="mb-4">
                    <p className="text-slate-800 font-semibold">
                      {userDetails.username}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {userDetails.emailId}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-2 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top-5">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/wellnesshub"
              className="text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Wellness Hub
            </Link>

            {isLoggedIn ? (
              <div className="flex flex-col space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 flex items-center jzustify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white border border-slate-200">
                    {userDetails.username.charAt(0)}
                  </div>
                  <div>
                    <div className="text-slate-800 font-semibold">
                      {userDetails.username}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {userDetails.emailId}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-2 rounded-md text-center font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
