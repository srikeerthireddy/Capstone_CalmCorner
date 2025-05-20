// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/About';
import WelnessHub from './Components/WellnessRoutes/Wellnesshub';
import Login from './Components/Login/Login';
import Signin from './Components/SignIn/Signin';
import Footer from './Components/Footer/Footer';
import { AuthProvider } from './Components/AuthContext/AuthContext';
import './App.css';
function App(){
    return(
      <AuthProvider>
<Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/aboutus" element={ <About/>}/>
        <Route path="/wellnesshub/*" element={<WelnessHub/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/signup" element={<Signin/>}/>
      </Routes>
     
      <Footer/>
      </Router>
      </AuthProvider>
      
     
    )
}
export default App;