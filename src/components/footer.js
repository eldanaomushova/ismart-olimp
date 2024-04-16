import React from 'react';
import '../styles/footer.css';  
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from 'react-icons/md';


function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
        <ul className='contacts'>
          <li><a href="https://wa.me/996554544501" className='link-text'>
            <FaWhatsapp style={{ color: 'black' }} className='icon'/> +996554544501</a></li>
          <li><a href="mailto:ismartolimpiad@gmail.com" className='link-text'>
            <MdOutlineMail style={{ color: 'black' }} className='icon'/>ismartolimpiad@gmail.com</a></li>
          <li><a href="https://2gis.kg/bishkek/geo/70000001020530172" className='link-text'>
            <MdLocationOn style={{ color: 'black' }} className='icon'/>United World International School</a></li>  
        </ul>
    </footer>
    </div>
    
  );
}
export default Footer;
