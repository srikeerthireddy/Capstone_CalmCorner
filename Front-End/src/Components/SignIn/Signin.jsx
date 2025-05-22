/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import axios from "axios";
// import "./SignIn.css";

// function Signin() {
//   const [signInUser, setSignInUser] = useState({
//     username: "",
//     emailId: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e, field) => {
//     setSignInUser({ ...signInUser, [field]: e.target.value });
//   };
//   const [selectedFile, setSelectedFile] = useState(null);
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", signInUser.username);
//     formData.append("emailId", signInUser.emailId);
//     formData.append("password", signInUser.password);

//     if (selectedFile) {
//       formData.append("profilePicture", selectedFile);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5226/api/users/signin",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setMessage(response.data.message);
//       setIsSuccess(response.status === 201);
//       console.log("User signed in successfully");
//     } catch (error) {
//       setMessage(error.response.data.message);
//       setIsSuccess(false);
//       console.error("An error occurred while signing in", error);
//     }
//   };

//   const handleGoogleLogin = () => {
//     window.location.href = "http://localhost:5226/auth/google";
//   };

//   return (
//     <div className="signin-container">
//       <div className="signin-box">
//         <div className="message-succ">
//           {message && (
//             <div className={`message ${isSuccess ? "success" : "error"}`}>
//               <p>{message}</p>
//             </div>
//           )}
//         </div>

//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="signin-form-group">
//             <label htmlFor="username">USER NAME</label>
//             <input
//               type="text"
//               id="username"
//               value={signInUser.username}
//               onChange={(e) => handleChange(e, "username")}
//               required
//             />
//           </div>
//           <div className="signin-form-group">
//             <label htmlFor="email">EMAIL ID</label>
//             <input
//               type="email"
//               id="email"
//               value={signInUser.emailId}
//               onChange={(e) => handleChange(e, "emailId")}
//               required
//             />
//           </div>
//           <div className="signin-form-group">
//             <label htmlFor="password">PASSWORD</label>
//             <input
//               type="password"
//               id="password"
//               value={signInUser.password}
//               onChange={(e) => handleChange(e, "password")}
//               required
//             />
//           </div>
//           <div className="signin-form-group">
//             <label htmlFor="file-upload" className="register-label">
//               <img src="https://cdn-icons-png.flaticon.com/128/3097/3097412.png" alt="upload-icon" className="upload-icon" />
//               Upload your file:
//             </label>
//             <input
//               id="file-upload"
//               className="register-input"
//               type="file"
//               onChange={handleFileChange}
//             />
//           </div>
//           <button type="submit" className="signin-button">
//             Sign In
//           </button>
//           <div className="google-auth">
//           <button type="button" onClick={handleGoogleLogin} className="google-login-button">
//             <img
//               src="https://cdn-icons-png.flaticon.com/128/720/720255.png"
//               alt="google-icon"
//               className="google-logo"
//             />
//             Continue with Google
//           </button>
//           </div>
          
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function Signin() {
  const [signInUser, setSignInUser] = useState({
    username: "",
    emailId: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, field) => {
    setSignInUser({ ...signInUser, [field]: e.target.value });
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", signInUser.username);
    formData.append("emailId", signInUser.emailId);
    formData.append("password", signInUser.password);

    if (selectedFile) {
      formData.append("profilePicture", selectedFile);
    }

    try {
      const response = await axios.post(
        "https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/api/users/signin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
      setIsSuccess(response.status === 201);
      navigate("/login")
    } catch (error) {
      setMessage(error.response.data.message);
      setIsSuccess(false);
      console.error("An error occurred while signing in", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/auth/google";
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="message-succ">
          {message && (
            <div className={`message ${isSuccess ? "success" : "error"}`}>
              <p>{message}</p>
            </div>
          )}
        </div>

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
              <img src="https://cdn-icons-png.flaticon.com/128/3097/3097412.png" alt="upload-icon" className="upload-icon" />
              Upload your file:
            </label>
            <input
              id="file-upload"
              className="register-input"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
          <div className="google-auth">
          <button type="button" onClick={handleGoogleLogin} className="google-login-button">
            <img
              src="https://cdn-icons-png.flaticon.com/128/720/720255.png"
              alt="google-icon"
              className="google-logo"
            />
            Continue with Google
          </button>
          <p className="sign">
                    Don't have an account? <Link to="/login">Login</Link>
                  </p>
          </div>
          
          
        </form>
      </div>
    </div>
  );
}

export default Signin;
