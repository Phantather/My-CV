import React from 'react';
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Works from "./Works/Works";

const Main = () => {
    return (
        <main>
            <Home/>
            <Skills/>
            <Works/>
            <Portfolio/>
        </main>
    );
};

export default Main;