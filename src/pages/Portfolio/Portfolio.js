import React from 'react';
import Slide from "../Main/Portfolio/Slide";
import Skills from "../Main/Skills/Skills";

const Portfolio = () => {
    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <h2 className="portfolio__title">
                        Portfolio
                    </h2>

                    <Slide/>

                </div>
            </section>
            <Skills/>
        </>
    );
};

export default Portfolio;