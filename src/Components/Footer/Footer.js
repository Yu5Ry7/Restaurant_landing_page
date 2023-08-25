import React from 'react';
import Logo from "../../Assets/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin} from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-contianer">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Qulity</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>123-123-1223</span>
                <span>hello@foods.com</span>
                <span>press@food.com</span>
                <span>contac@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Term and Conditons</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer