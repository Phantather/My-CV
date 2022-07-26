import React from 'react';
import {SiJavascript} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiGit} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'


const Skills = () => {
    return (
        <section className="skills">
            <div className="container">
                <div className="skills__row">
                    <div className="skills__block">
                        <i className="fab fa-js">
                            <SiJavascript/>
                        </i>
                        <p className="skills__text">
                            JavaScript
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-react">
                            <GrReactjs/>
                        </i>
                        <p className="skills__text">
                            React
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-node">
                            <SiFirebase/>
                        </i>
                        <p className="skills__text">
                            Firebase
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-html5">
                            <AiFillHtml5/>
                        </i>
                        <p className="skills__text">
                            HTML
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-css3-alt">
                            <IoLogoCss3/>
                        </i>
                        <p className="skills__text">
                            CSS
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-git">
                            <DiGit/>
                        </i>
                        <p className="skills__text">
                            Git
                        </p>
                    </div>
                    <div className="skills__block">
                        <i className="fab fa-github">
                            <BsGithub/>
                        </i>
                        <p className="skills__text">
                            GitHub
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;