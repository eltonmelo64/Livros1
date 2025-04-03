import React from 'react';
import styles from './Footer.module.scss'; 
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import YouTube from "../../assets/Youtube.png";
import Linkedin from "../../assets/Linkedin.png";
import Instagram from "../../assets/Instagram.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBottom}>
                <p>4002-8922</p>
                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="Twitter" title="Twitter" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={YouTube} alt="YouTube" title="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" title="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" title="Instagram" />
                    </a>
                </div>
            </div>
            <div className={styles.layout}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
