import React from 'react';
import {NavLink} from "react-router-dom";



const Header = () => {



    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <NavLink to={'/'} className="header__link">
                                Main
                            </NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to={'/about'} className="header__link">
                                About me
                            </NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to={'/portfolio'} className="header__link">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="header__list-item">
                            <NavLink to={'/contact'} className="header__link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;