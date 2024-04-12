import React from 'react';
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import '../styles/navbar.css';
import logo from '../images/logo1.png';

const Navbar = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <img src={logo} alt='logo' id='logo'/>
                <a href='#organization'>Организация</a>
                <a href='#competitions'>Соревнования</a>
                <a href={`https://wa.me/+996554544501`} target="_blank" rel="noopener noreferrer"><FaWhatsapp id='icons-wh'/></a>
                <a href={`mailto:ismartolimpiad@gmail.com`} target="_blank" rel="noopener noreferrer"><FaEnvelope id='icons-wh'/></a>
            </nav>
        </div>
    )
}

export default Navbar;
