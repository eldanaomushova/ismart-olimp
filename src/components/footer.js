import '../styles/footer.css';  
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <footer className="footer">
        <ul className='contacts'>
          <li>
            <a 
              href="https://wa.me/996554554100" 
              className='link-text' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ color: 'black' }} className='icon' />0554554100
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/ismart.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              className='link-text' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: 'black' }} className='icon' />ismart.kg
            </a>
          </li>
          <li>
            <a 
              href="mailto:ismartolimpiad@gmail.com" 
              className='link-text' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MdOutlineMail style={{ color: 'black' }} className='icon' />ismartolimpiad@gmail.com
            </a>
          </li>
          <li>
            <a 
              href="https://2gis.kg/bishkek/geo/70000001020530172" 
              className='link-text' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MdLocationOn style={{ color: 'black' }} className='icon' />
              United World International School (​Проспект Абсамата Масалиева, 26)
            </a>
          </li>  
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
