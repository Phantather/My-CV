import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__blocks">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <NavLink to={'/'} className="footer__link">
                                    Main
                                </NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to={'/about'} className="footer__link">
                                    About me
                                </NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to={'portfolio'} className="footer__link">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to={'/contact'} className="footer__link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__blocks">
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                Contact:
                            </li>
                            <li className="footer__list-item">
                                <a target="_blank" href="mailto:akdil.hstech@gmail.com" className="footer__link">
                                    Email: akdil.hstech@gmail.com
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a target="_blank" href="https://www.instagram.com/kbnchbkv.00/"
                                   className="footer__link">
                                    Inst: kbnchbkv.00
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a target="_blank" href="tel:996501251221" className="footer__link">
                                    Calls: +996 (501) - 25 - 12 - 21
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="" className="footer__up">
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 11.5L12 1L1.5 11.5" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M12 1L12 25" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;