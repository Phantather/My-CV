import React from 'react';
import { FiExternalLink, FiImage } from 'react-icons/fi';

const projects = [
  {
    title: 'AIS Mugalim',
    description: 'Educational information system for teachers',
    link: null,
  },
  {
    title: 'Vacancies Portal',
    description: 'Job vacancies platform for educational sector',
    link: null,
  },
  {
    title: 'Weather App',
    description: 'Weather forecast application built with React',
    link: 'https://open-weather-olive.vercel.app/',
  },
  {
    title: 'Uber Clone',
    description: 'Uber landing page layout',
    link: 'https://phantather.github.io/uber/',
  },
  {
    title: 'CloudBudget',
    description: 'Budget management web application',
    link: 'https://phantather.github.io/CloudBudget/',
  },
  {
    title: 'Grovemade Desktop',
    description: 'Grovemade product showcase website',
    link: 'https://phantather.github.io/grovemade-desktop/',
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
                {/* Placeholder for project screenshot */}
                <FiImage />
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
