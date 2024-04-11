import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import '../styles/navbar.css';
import logo from '../images/logo1.png';

const Navbar = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <Link to="/organization">
                    <img src={logo} alt='logo' id='logo'/>
                </Link>
                <a href='#organization'>Организация</a>
                <a href='#competitions'>Соревнования</a>
                <a href={`https://wa.me/+996554544501`} target="_blank" rel="noopener noreferrer"><FaWhatsapp id='icons-wh'/></a>
                <a href={`mailto:ismartolympiads@gmail.com`} target="_blank" rel="noopener noreferrer"><FaEnvelope id='icons-wh'/></a>
            </nav>
        </div>
    )
}

export default Navbar;
