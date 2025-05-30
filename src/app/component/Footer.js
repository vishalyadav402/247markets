import React from 'react';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGooglePay
} from 'react-icons/fa6';
import { SiPhonepe } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#02154e] text-white py-8 text-center">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4 text-2xl">
        <FaYoutube />
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center space-x-4 text-sm font-semibold mb-6">
        <a href="#" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>Game Rules</a>
        <span>|</span>
        <a href="#" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>FAQs</a>
        <span>|</span>
        <a href="/about-us" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>About Us</a>
        <span>|</span>
        <a href="#" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>News</a>
        <span>|</span>
        <a href="/play-responsibly" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>Play Responsibly</a>
        <span>|</span>
        <a href="#" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>Legal</a>
        <span>|</span>
        <a href="/contact-us" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>Contact Us</a>
        <span>|</span>
        <a href="#" className='hover:border-b-2 border-red-400 leading-4 transition-all duration-300'>Promotions</a>
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <SiPhonepe className="text-4xl" />
        <FaGooglePay className="text-6xl"/>
      </div>

      {/* Disclaimer Text */}
      <p className="text-xs mb-1">
        All Rights Reserved © 2025. Must be 18 or older to play.
      </p>
      <p className="text-xs max-w-5xl mx-auto px-4">
      Operated by 247Markets India Private Limited, under applicable laws and gaming regulations in India. 247Markets is a registered trademark of 247Markets India Private Limited.
      </p>
    </footer>
  );
};

export default Footer;
