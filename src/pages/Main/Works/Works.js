import React from 'react';

import hs from '../../../assets/hs.jpg'
import it from '../../../assets/it-run.png'

const Works = () => {

    return (
        <section className="works">
            <div className="container">
                <h2 className="works__title">
                    Experience
                </h2>

                    <div className={"works__content"}>
                        <div className="works__card">
                            <div className="works__card-item">
                                <h3 className="works__card-title">
                                    IT-RUN Academy
                                </h3>
                                <p className="works__card-descr">
                                    Children's programming teacher
                                </p>
                                <p className="works__card-descr">
                                    - Conducting classes <br/>
                                    - Accounting for student progress and attendance <br/>
                                    - Close communication with students <br/>
                                </p>
                                <p className="works__card-descr">20.06.2022 - Until now</p>
                                <p className="works__card-descr">
                                    Mentor Assistant for <br/>
                                    Front-End Development <br/>

                                </p>
                                <p className="works__card-descr">
                                    - Conducting extra classes <br/>
                                    - Accounting for student progress and attendance <br/>
                                    - Close communication with students (about 60+ students) <br/>
                                </p>
                                <p className="works__card-descr">21.06.2021 - Until now</p>
                            </div>
                            <div className="works__card-company">
                                <img src={it} alt=""/>
                            </div>
                        </div>
                        <div className="works__card">
                            <div className="works__card-item">
                                <h3 className="works__card-title">
                                    HST-Technologies
                                </h3>
                                <p className="works__card-descr">
                                    IT - Specialist in DATA Center <br/>

                                </p>
                                <p className="works__card-descr">
                                    -Computer Repair <br/>
                                    -Installing WINDOWS, updating drivers <br/>
                                    -Check and manage over 500 devices <br/>
                                    -Flashing video cards, setting up motherboards and BIOS <br/>
                                    -Creating internet cables <br/>
                                    -Manage and monitor HIVE OS operating system <br/>
                                </p>
                                <p className="works__card-descr">01.12.2018 - 01.2020</p>
                            </div>
                            <div className="works__card-company">
                                <img src={hs} alt=""/>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    );
};

export default Works;