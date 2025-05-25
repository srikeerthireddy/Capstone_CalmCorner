import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Wellnesshub from "./Components/WellnessRoutes/Wellnesshub";
import Login from "./Components/Login/Login";
import Signin from "./Components/SignIn/Signin";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/wellnesshub/*" element={<Wellnesshub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
