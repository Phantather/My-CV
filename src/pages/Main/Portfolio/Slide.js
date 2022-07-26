import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from "swiper";


import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import uber from '../../../assets/portfolio/uber.jpg'
import grove from '../../../assets/portfolio/grove.png'
import delivery from '../../../assets/portfolio/delevery.png'
import cloud from '../../../assets/portfolio/cloud.png'
import weather from '../../../assets/portfolio/2022-07-26_120634.png'
import arashan from '../../../assets/portfolio/2022-07-26_124053.png'


const Slide = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{clickable: true}}
                navigation={true}
                autoPlay={true}
                autoplay={
                    {
                        delay: 3000,
                        clickable: true
                    }

                }
                speed={2000}
                loop={true}
            >
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={arashan} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                Arashan
                            </h3>
                            <a href="https://open-weather-olive.vercel.app/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={weather} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                Weather
                            </h3>
                            <a href="https://open-weather-olive.vercel.app/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={uber} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                Uber
                            </h3>
                            <a href="https://phantather.github.io/uber/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={cloud} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                CloudBudget
                            </h3>
                            <a href="https://phantather.github.io/CloudBudget/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={grove} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                Grovemade-Desktop
                            </h3>
                            <a href="https://phantather.github.io/grovemade-desktop/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content">
                        <img src={delivery} alt=""/>
                        <div className="portfolio__info">
                            <h3 className="portfolio__info-title">
                                Delivery
                            </h3>
                            <a href="https://phantather.github.io/delivery/" className="portfolio__info-link">
                                More
                            </a>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Slide;