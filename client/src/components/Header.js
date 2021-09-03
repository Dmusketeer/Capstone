import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Services from './Services'
import Logo from '../img/logo.png';
const services = () => {
    console.log('sevices')
}
const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="navbar">
                        <img src={Logo} alt="logo" className="logo" />
                        <ul className="navUl">
                            <li><Link to='services' onClick={services}>Services</Link></li>
                            <li><Link to='bids'>bids</Link></li>
                            <li><Link to='signUp'>sign-up</Link></li>
                            <li><Link to={'./login'}>login</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="heroTextBox">
                </div>
            </header>
        </>
    );
}
export default Header;
