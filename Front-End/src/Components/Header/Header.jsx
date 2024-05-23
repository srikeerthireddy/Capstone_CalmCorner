// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/!.jpg';
import './Header.css';
function Header(){
    return(
        <>
        <header>
            <img src={logo} alt="Logo" />
            <Link to="/" exact>HOME</Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/wellnesshub">WELLNESS-HUB</Link>
            <Link to="/login">LOGIN</Link>
        </header>
        </>
    )
}
export default Header; 