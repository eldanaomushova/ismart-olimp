import React from 'react';
import '../styles/footer.css'; 
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

function Footer() {
    return (
        <footer className="footer">
        <div className="registration">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKR8yVMH_huauSrgHYZxj43OqkrWvNWdfvbCYuchow64CSLA/viewform" target="_blank" rel="noopener noreferrer">
            Register
            </a>
        </div>
        <div className="contacts">
            <p>contacts</p>
            <li><a href="https://wa.me/996554544501" className='icon'>
            <FaWhatsapp style={{ color: 'black' }}/> +996554544501
            </a></li>
            <li><a href="mailto:ismartolympiads@gmail.com" className='icon'>
            <IoIosMail style={{ color: 'black' }}/> ismartolympiads@gmail.com
            </a></li>
        </div>
        <div className="links">
            <ul>
            <li><a href="/competitions">Competitions</a></li>
            <li><a href="/organization">Organization</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            </ul>
        </div>
        </footer>
    );
}

export default Footer;