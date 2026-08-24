import React from 'react';
import Hero from '../components/Hero/Hero';
import initiativesData from '../data/initiatives.json';
import './SocialInitiatives.css';

const SocialInitiatives = () => {
  return (
    <div className="initiatives-page">
      <Hero 
        title="Beyond the Drumbeat"
        subtitle="Our commitment to society and community"
        bgImage="https://placehold.co/1920x1080/111/555?text=Social+Impact+Hero"
      />

      <section className="section">
        <div className="container">
          <div className="initiatives-list">
            {initiativesData.map((item, index) => (
              <div key={item.id} className={`initiative-row fade-up visible delay-${(index % 3 + 1) * 100}`}>
                <div className="initiative-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="initiative-content">
                  <h3>{item.title}</h3>
                  <div className="initiative-meta">
                    <span>{item.year}</span>
                    <span>{item.location}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="initiative-impact">
                    <strong>Impact:</strong> {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialInitiatives;
