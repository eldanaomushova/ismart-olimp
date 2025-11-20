import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import '../styles/navbar.css';
import logo from '../images/logo1.png';

const Navbar = () => {
    return (
        <div className='navigation-container'>
            <nav className='navbar'>
                <a href = '#start'><img src={logo} alt='logo' id='logo'/></a>
                <div className='icons-block'>
                <a href={`https://wa.me/+996554554100`} target="_blank" rel="noopener noreferrer"><FaWhatsapp id='icons-wh'/></a>
                <a href={`https://www.instagram.com/ismart.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`} target="_blank" rel="noopener noreferrer"><FaInstagram id='icons-wh'/></a>
                <a href={`mailto:ismartolimpiad@gmail.com`} target="_blank" rel="noopener noreferrer"><FaEnvelope id='icons-wh'/></a>
                <a href="https://2gis.kg/bishkek/geo/70000001020530172" target="_blank" rel="noopener noreferrer"><MdLocationOn id='icons-wh'/></a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
