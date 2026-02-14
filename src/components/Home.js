import React, {useState, useEffect, useCallback} from 'react';
import {FiMail, FiPhone, FiLinkedin, FiMapPin, FiDownload, FiSend} from 'react-icons/fi';
import imgWebp from '../assets/photo.webp';
import imgJpg from '../assets/photo.jpg';

const useTypewriter = (text, speed = 80, delay = 0) => {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        setDisplayed('');
        setDone(false);
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return {displayed, done};
};

const Particles = () => {
    const [particles] = useState(() =>
        Array.from({length: 20}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
        }))
    );

    return (
        <div className="home__particles">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="home__particle"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

const Home = () => {
    const greeting = useTypewriter("Hello, I'm", 80, 300);
    const name = useTypewriter('Akdil Kubanychbekov', 60, 1200);

    return (
        <section className="home" id="home">
            <Particles/>
            <div className="container">
                <div className="home__row">
                    <div className="home__content">
                        <p className="home__greeting">
                            {greeting.displayed}
                            {!greeting.done && <span className="home__cursor">|</span>}
                        </p>
                        <h1 className="home__name">
                            {name.displayed}
                            {greeting.done && !name.done && <span className="home__cursor">|</span>}
                        </h1>
                        <p className="home__title">Middle Front-End Engineer</p>
                        <p className="home__subtitle">
                            TS | React | Next.js | Node.js
                        </p>
                        <p className="home__info">
                            Middle Front-End Engineer at the "Department of Digital Education"
                            in OJSC "Tunduk". Passionate about creating modern digital solutions
                            for educational institutions.
                        </p>
                        <div className="home__contacts">
                            <a href="http://linkedin.com/in/akdil-kubanychbekov" target="_blank" rel="noreferrer"
                               className="home__contact-item">
                                <FiLinkedin/> LinkedIn
                            </a>
                            <a href="mailto:akdil.hstech@gmail.com" className="home__contact-item">
                                <FiMail/> akdil.hstech@gmail.com
                            </a>
                            <a href="https://t.me/phanti_dev" target="_blank" rel="noreferrer"
                               className="home__contact-item">
                                <FiSend/> Telegram
                            </a>
                            <a href="tel:+996999251221" className="home__contact-item">
                                <FiPhone/> +996 999 251 221
                            </a>
                            <span className="home__contact-item">
                <FiMapPin/> Bishkek, Kyrgyzstan
              </span>
                        </div>
                        <div className="home__actions">
                            <a href="/Profile.pdf" download className="home__btn home__btn--primary">
                                <FiDownload/> Download CV
                            </a>
                        </div>
                    </div>
                    <div className="home__photo">
                        <picture>
                            <source srcSet={imgWebp} type="image/webp"/>
                            <img src={imgJpg} alt="Akdil Kubanychbekov"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
