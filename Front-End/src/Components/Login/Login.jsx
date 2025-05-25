import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../AuthContext/AuthContext";
import axiosInstance from "../WellnessHub/axios/axios";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({ username: "", emailId: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromGoogle = params.get("token");

    if (tokenFromGoogle) {
      Cookies.set("token", tokenFromGoogle, {
        path: "/",
        sameSite: "Lax",
        secure: false,
      });

      axiosInstance
        .get("/users/me", {
          headers: { Authorization: `Bearer ${tokenFromGoogle}` },
        })
        .then((res) => {
          login(tokenFromGoogle, res.data.user);
          setTimeout(() => navigate("/"), 300);
        })
        .catch(() => {
          Cookies.remove("token");
          setMessage("Google login failed.");
          setIsSuccess(false);
        });
    }
  }, [login, navigate]);

  const handleChange = (e, field) => {
    setLoginUser((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/login", loginUser);
      login(res.data.token, res.data.user);
      setMessage("Login successful");
      setIsSuccess(true);
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login error.");
      setIsSuccess(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5226/auth/google";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {message && <div className={`message ${isSuccess ? "success" : "error"}`}><p>{message}</p></div>}
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>USERNAME</label>
            <input type="text" value={loginUser.username} onChange={(e) => handleChange(e, "username")} required />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" value={loginUser.emailId} onChange={(e) => handleChange(e, "emailId")} required />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input type="password" value={loginUser.password} onChange={(e) => handleChange(e, "password")} required />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
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
        </div>
        <p className="sign">Don't have an account? <Link to="/signin">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
