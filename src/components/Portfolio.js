import React from 'react';
import { FiExternalLink, FiImage } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import ortImg from '../assets/portfolio/ort.png';
import mugalimImg from '../assets/portfolio/mugalim.png';
import vacanciesImg from '../assets/portfolio/vacancies.png';
import hyundaiImg from '../assets/portfolio/hyundai.jpg';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio.ort.title'),
      description: t('portfolio.ort.desc'),
      link: 'https://testing.edu.gov.kg/ort-registration/',
      image: ortImg,
    },
    {
      title: t('portfolio.mugalim.title'),
      description: t('portfolio.mugalim.desc'),
      link: 'https://mugalim.edu.gov.kg/ru/',
      image: mugalimImg,
    },
    {
      title: t('portfolio.vacancies.title'),
      description: t('portfolio.vacancies.desc'),
      link: 'https://mugalim.edu.gov.kg/nppr/',
      image: vacanciesImg,
    },
    {
      title: t('portfolio.contests.title'),
      description: t('portfolio.contests.desc'),
      link: 'https://mugalim.edu.gov.kg/concurs/',
      image: mugalimImg,
    },
    {
      title: t('portfolio.hyundai.title'),
      description: t('portfolio.hyundai.desc'),
      link: 'https://hyundai.kg/',
      image: hyundaiImg,
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">{t('portfolio.title')}</h2>
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
                    {t('portfolio.viewProject')} <FiExternalLink />
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
