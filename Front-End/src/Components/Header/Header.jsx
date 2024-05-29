// eslint-disable-next-line no-unused-vars
import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/!.jpg';
import './Header.css';
function Header(){
    return(
        <>
        <header className='header'>
            <img src={logo} alt="Logo" className='logo' />
            <nav className='nav'>
            <NavLink to="/" exact className='nav-link'>HOME</NavLink>
            <NavLink to="/aboutus" className='nav-link'>ABOUT US</NavLink>
            <NavLink to="/wellnesshub"className='nav-link'>WELLNESS-HUB</NavLink>
            <NavLink to="/login" className='nav-link'>LOGIN</NavLink>
            </nav>
            
        </header>
        </>
    )
}
export default Header; 