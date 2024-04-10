import React from 'react';
import '../styles/footer.css'; 
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
    <a href='https://docs.google.com/forms/d/e/1FAIpQLScKR8yVMH_huauSrgHYZxj43OqkrWvNWdfvbCYuchow64CSLA/viewform'><button className='regist-button'>Регистрация</button></a>

      <div className="links">
        <ul>
        <li><a href="#competitions">Соревнования</a></li>
        <li><a href="#organization">Организация</a></li>
        <li><a href="/sponsors">Спонсоры</a></li>
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
