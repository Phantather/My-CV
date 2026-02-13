import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import monImg from '../../../assets/mon.gif';
import tundukImg from '../../../assets/tunduk.png';

const experiences = [
  {
    company: '"Tunduk" OJSC',
    role: 'Middle Front-End Engineer',
    period: 'August 2025 - Present',
    location: 'Bishkek, Kyrgyzstan',
    image: tundukImg,
    description: [
      'Creation and optimization of modern digital solutions for improving educational institutions',
      'Development of user interfaces for educational information systems',
      'Working with the database',
      'API Development',
      'Code refactoring',
    ],
  },
  {
    company: 'Digital Education Center (MON KR)',
    role: 'Front-End Engineer',
    period: 'December 2023 - August 2025',
    location: 'Bishkek, Kyrgyzstan',
    image: monImg,
    description: [
      'Development of the "AIS Mugalim" project',
      'Development of the "Vacancies" project',
      'Development of the "Contests" project',
      'Development of the "Testing" project',
      'Development of user interfaces for educational information systems',
    ],
  },
  {
    company: 'Freelance',
    role: 'Front-End Developer',
    period: 'November 2023 - May 2025',
    location: 'Bishkek, Kyrgyzstan',
    description: [
      'Freelance web development projects',
    ],
  },
  {
    company: 'IT-RUN Academy',
    role: 'Front-End Mentor',
    period: 'June 2021 - January 2025',
    location: 'Bishkek, Kyrgyzstan',
    description: [
      'Conducting classes on Front-End development',
      'Front-End Mentor for Kids (30+ students)',
      'Mentor Assistant (100+ students)',
      'Accounting for student progress and attendance',
    ],
  },
  {
    company: 'Future',
    role: 'Frontend Developer',
    period: 'August 2022 - April 2023',
    location: 'Bishkek, Kyrgyzstan',
    description: [
      'Website development',
      'Working with SEO optimization',
    ],
  },
  {
    company: 'HST Technologies',
    role: 'IT Specialist',
    period: 'December 2018 - January 2020',
    location: 'Naryn, Kyrgyzstan',
    description: [
      'Computer Repair',
      'Check and manage over 500 devices',
      'Flashing video cards, setting up motherboards and BIOS',
      'Management and monitoring of the HIVE OS',
    ],
  },
];

const Works = () => {
  return (
    <section className="works" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="works__timeline">
          {experiences.map((exp, idx) => (
            <div className="works__card" key={idx}>
              <div className="works__card-image">
                {exp.image ? <img src={exp.image} alt={exp.company} /> : <FiBriefcase />}
              </div>
              <div className="works__card-body">
                <h3 className="works__card-company">{exp.company}</h3>
                <p className="works__card-role">{exp.role}</p>
                <p className="works__card-period">{exp.period} &middot; {exp.location}</p>
                <ul className="works__card-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="works__education">
          <h3 className="works__edu-title">Education</h3>
          <div className="works__edu-card">
            <h4>Naryn State University</h4>
            <p>Bachelor of Science - Health Informatics and Biomedical Engineering</p>
            <p className="works__edu-period">September 2018 - June 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
