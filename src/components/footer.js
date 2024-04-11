import React from 'react';
import '../styles/footer.css';  
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
      <div className="links">
        <ul>
        <li><a href="#competitions">Соревнования</a></li>
        <li><a href="#organization">Организация</a></li>
        </ul>
      </div>
      <div className="contacts">
        <ul>
        <li><a href="https://wa.me/996554544501" className='icon'>
          <FaWhatsapp style={{ color: 'black' }}/> +996554544501
        </a></li>
        <li><a href="mailto:ismartolympiads@gmail.com" className='icon'>
          <MdOutlineMail style={{ color: 'black' }}/> ismartolympiads@gmail.com
        </a></li>
        </ul>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
