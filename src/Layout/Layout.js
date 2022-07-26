import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from "./Header/Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer/Footer";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";


const Layout = () => {
    const location = useLocation()
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
            {
                location.pathname === '/contact' ? '' :  <Footer/>
            }


        </>
    );
};

export default Layout;