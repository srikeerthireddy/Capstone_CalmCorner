// App.jsx
import { Route, Routes } from 'react-router-dom'; // ❌ No need to import BrowserRouter here
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/About';
import WelnessHub from './Components/WellnessRoutes/Wellnesshub';
import Login from './Components/Login/Login';
import Signin from './Components/SignIn/Signin';
import Footer from './Components/Footer/Footer';
import { AuthProvider } from './Components/AuthContext/AuthContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/wellnesshub/*" element={<WelnessHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
