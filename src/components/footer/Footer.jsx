import React from 'react';
import { RiGithubFill, RiLinkedinFill, RiArrowUpLine } from "react-icons/ri";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <RiGithubFill />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <RiLinkedinFill />
        </a>
      </div>

      <p className="footer__text">
        © {new Date().getFullYear()} Made with <span>❤️</span> by Alok Ranjan
      </p>

      <a href="#home" className="footer__top">
        <RiArrowUpLine />
      </a>
    </footer>
  )
}

export default Footer