import React from 'react';
import { FiExternalLink, FiImage } from 'react-icons/fi';
import ortImg from '../assets/portfolio/ort.png';
import mugalimImg from '../assets/portfolio/mugalim.png';
import vacanciesImg from '../assets/portfolio/vacancies.png';
import hyundaiImg from '../assets/portfolio/hyundai.jpg';

const projects = [
  {
    title: 'ORT Registration',
    description: 'General Republican Testing registration system',
    link: 'https://testing.edu.gov.kg/ort-registration/',
    image: ortImg,
  },
  {
    title: 'AIS Mugalim',
    description: 'Educational information system for teachers',
    link: 'https://mugalim.edu.gov.kg/ru/',
    image: mugalimImg,
  },
  {
    title: 'Vacancies Portal',
    description: 'Job vacancies platform for educational sector',
    link: 'https://mugalim.edu.gov.kg/nppr/',
    image: vacanciesImg,
  },
  {
    title: 'Contests',
    description: 'Competition platform for educational sector',
    link: 'https://mugalim.edu.gov.kg/concurs/',
    image: mugalimImg,
  },
  {
    title: 'Hyundai KG',
    description: 'Official Hyundai dealership website',
    link: 'https://hyundai.kg/',
    image: hyundaiImg,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio__grid">
          {projects.map((project, idx) => (
            <div className="portfolio__card" key={idx}>
              <div className="portfolio__card-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <FiImage />
                )}
              </div>
              <div className="portfolio__card-body">
                <h3 className="portfolio__card-title">{project.title}</h3>
                <p className="portfolio__card-desc">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio__card-link"
                  >
                    View Project <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
