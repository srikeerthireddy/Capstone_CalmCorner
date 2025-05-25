import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";

function Signin() {
  const [signInUser, setSignInUser] = useState({
    username: "",
    emailId: "",
    password: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, field) => {
    setSignInUser((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("username", signInUser.username);
    formData.append("emailId", signInUser.emailId);
    formData.append("password", signInUser.password);
    if (selectedFile) formData.append("profilePicture", selectedFile);

    try {
      const response = await axios.post(
        "https://s61-srikeerthi-capstone-calmcorner-6.onrender.com/api/users/signin",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(response.data.message || "Account created successfully.");
      setIsSuccess(response.status === 201);
      navigate("/login");
    } catch (error) {
      const errMsg =
        error.response?.data?.message || "An error occurred during sign-up.";
      setMessage(errMsg);
      setIsSuccess(false);
      console.error("Sign-in error:", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://s61-srikeerthi-capstone-calmcorner-6.onrender.com/auth/google";
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        {message && (
          <div className="message-succ">
            <div className={`message ${isSuccess ? "success" : "error"}`}>
              <p>{message}</p>
            </div>
          </div>
        )}

        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="signin-form-group">
            <label htmlFor="username">USER NAME</label>
            <input
              type="text"
              id="username"
              value={signInUser.username}
              onChange={(e) => handleChange(e, "username")}
              required
            />
          </div>

          <div className="signin-form-group">
            <label htmlFor="email">EMAIL ID</label>
            <input
              type="email"
              id="email"
              value={signInUser.emailId}
              onChange={(e) => handleChange(e, "emailId")}
              required
            />
          </div>

          <div className="signin-form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={signInUser.password}
              onChange={(e) => handleChange(e, "password")}
              required
            />
          </div>

          <div className="signin-form-group">
            <label htmlFor="file-upload" className="register-label">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3097/3097412.png"
                alt="upload-icon"
                className="upload-icon"
              />
              Upload your profile picture:
            </label>
            <input
              type="file"
              id="file-upload"
              className="register-input"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          <button type="submit" className="signin-button">
            Sign Up
          </button>

          <div className="google-auth">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="google-login-button"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/720/720255.png"
                alt="google-icon"
                className="google-logo"
              />
              Continue with Google
            </button>
            <p className="sign">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
