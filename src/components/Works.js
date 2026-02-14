import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import decImg from '../assets/dec.jpg';
import itRunImg from '../assets/it-run.jpeg';
import tundukImg from '../assets/tunduk.png';

const Works = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('exp.tunduk.company'),
      role: t('exp.tunduk.role'),
      period: t('exp.tunduk.period'),
      location: t('exp.tunduk.location'),
      image: tundukImg,
      description: [
        t('exp.tunduk.desc1'),
        t('exp.tunduk.desc2'),
        t('exp.tunduk.desc3'),
        t('exp.tunduk.desc4'),
        t('exp.tunduk.desc5'),
      ],
    },
    {
      company: t('exp.dec.company'),
      role: t('exp.dec.role'),
      period: t('exp.dec.period'),
      location: t('exp.dec.location'),
      image: decImg,
      description: [
        t('exp.dec.desc1'),
        t('exp.dec.desc2'),
        t('exp.dec.desc3'),
        t('exp.dec.desc4'),
        t('exp.dec.desc5'),
      ],
    },
    {
      company: t('exp.freelance.company'),
      role: t('exp.freelance.role'),
      period: t('exp.freelance.period'),
      location: t('exp.freelance.location'),
      description: [
        t('exp.freelance.desc1'),
      ],
    },
    {
      company: t('exp.itrun.company'),
      role: t('exp.itrun.role'),
      period: t('exp.itrun.period'),
      location: t('exp.itrun.location'),
      image: itRunImg,
      description: [
        t('exp.itrun.desc1'),
        t('exp.itrun.desc2'),
        t('exp.itrun.desc3'),
        t('exp.itrun.desc4'),
      ],
    },
    {
      company: t('exp.future.company'),
      role: t('exp.future.role'),
      period: t('exp.future.period'),
      location: t('exp.future.location'),
      description: [
        t('exp.future.desc1'),
        t('exp.future.desc2'),
      ],
    },
    {
      company: t('exp.hst.company'),
      role: t('exp.hst.role'),
      period: t('exp.hst.period'),
      location: t('exp.hst.location'),
      description: [
        t('exp.hst.desc1'),
        t('exp.hst.desc2'),
        t('exp.hst.desc3'),
        t('exp.hst.desc4'),
      ],
    },
  ];

  return (
    <section className="works" id="experience">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
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
          <h3 className="works__edu-title">{t('experience.education')}</h3>
          <div className="works__edu-card">
            <h4>{t('edu.university')}</h4>
            <p>{t('edu.degree')}</p>
            <p className="works__edu-period">{t('edu.period')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
