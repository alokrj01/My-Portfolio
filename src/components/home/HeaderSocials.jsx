import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/alokrj01' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='//hashnode.com/@alokrj' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>

            <a href='https://leetcode.com/u/alokrj1/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiLeetcode />
            </a>

            <a href='https://www.linkedin.com/in/alok-ranjan972' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/Alokrj01' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/alokrj_' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
