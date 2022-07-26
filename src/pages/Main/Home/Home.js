import React from 'react';
import img from '../../../assets/20201228_181620-removebg-preview.png'

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home__row">
                    <div className="home__content">
                        <p className="home__text">
                            Hello
                        </p>
                        <h1 className="home__name">
                            I’m Akdil
                            Kubanychbekov
                        </h1>
                        <p className="home__info">
                            I've been doing web design, front-end and back-end development <br/>
                            for a year now. Do you need a website design, site layout, <br/>
                            or maybe a turnkey website? Then contact me
                        </p>
                        <button className="home__contact-btn" type="button">
                            Contact me
                        </button>
                    </div>
                    <div className="home__box">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;