import React from 'react';
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import '../styles/navbar.css';
import logo from '../images/logo1.png';

const Navbar = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <a href = '#start'><img src={logo} alt='logo' id='logo'/></a>
                <a href='#organization'>Организация</a>
                <a href='#competitions'>Соревнования</a>
                <div className='icons-block'>
                    <a href={`https://wa.me/+996554544501`} target="_blank" rel="noopener noreferrer"><FaWhatsapp id='icons-wh'/></a>
                    <a href={`mailto:ismartolimpiad@gmail.com`} target="_blank" rel="noopener noreferrer"><FaEnvelope id='icons-wh'/></a>
                    <a href="https://2gis.kg/bishkek/geo/70000001020530172" target="_blank" rel="noopener noreferrer"><MdLocationOn id='icons-wh'/></a>
                </div>
                
            </nav>
        </div>
    )
}
export default Navbar;
