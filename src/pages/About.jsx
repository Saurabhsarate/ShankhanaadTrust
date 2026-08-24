import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero/Hero';
import orgData from '../data/organization.json';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  const timeline = t('about.journey.timeline', { returnObjects: true }) || [];
  const cultureData = t('about.culture.items', { returnObjects: true }) || [];
  const peopleData = t('about.people.items', { returnObjects: true }) || [];

  return (
    <div className="about-page">
      <Hero 
        title={t('about.heroTitle')}
        subtitle={t('about.heroSubtitle')}
        bgImage="/images/hero.jpeg"
      />

      <section className="section" id="journey">
        <div className="container">
          <div className="section-header text-center fade-up visible">
            <h2>{t('about.journey.title')}</h2>
            <p className="section-subtitle">{t('about.journey.subtitle')}</p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item fade-up visible delay-${(index % 3 + 1) * 100}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section culture-section" id="culture">
        <div className="container">
          <div className="section-header text-center fade-up visible">
            <h2>{t('about.culture.title')}</h2>
            <p className="section-subtitle">{t('about.culture.subtitle')}</p>
          </div>

          <div className="culture-grid">
            {cultureData.map((item, index) => (
              <div key={index} className={`culture-card fade-up visible delay-${(index % 3 + 1) * 100}`}>
                <div className="culture-image">
                  <img src={orgData.culture[index]?.image || `https://placehold.co/400x400/1a1a1a/444444?text=${item.name}`} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section people-section" id="people">
        <div className="container">
          <div className="section-header text-center fade-up visible">
            <h2>{t('about.people.title')}</h2>
            <p className="section-subtitle">{t('about.people.subtitle')}</p>
          </div>

          <div className="people-grid">
            {peopleData.map((person, index) => (
              <div key={index} className={`person-card fade-up visible delay-${(index % 3 + 1) * 100}`}>
                <div className="person-image">
                  <img src={orgData.people[index]?.image || "https://placehold.co/300x300/1a1a1a/444444?text=Portrait"} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <span className="person-role">{person.role}</span>
                <p>{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
