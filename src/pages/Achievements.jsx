import React from 'react';
import Hero from '../components/Hero/Hero';

const Achievements = () => {
  return (
    <div className="achievements-page">
      <Hero 
        title="Achievements & Recognition"
        subtitle="Celebrating our milestones"
        bgImage="https://placehold.co/1920x1080/111/555?text=Achievements+Hero"
      />
      
      <section className="section">
        <div className="container text-center">
          <h2 className="fade-up visible">Our Proud Moments</h2>
          <p className="fade-up delay-200 visible" style={{ maxWidth: '800px', margin: '0 auto var(--spacing-8)', lineHeight: '1.8' }}>
            Over the years, Shankhanaad Trust has been honored by numerous cultural and civic organizations for our dedication to preserving Maharashtrian heritage. From being awarded the "Best Pathak" at prestigious Ganeshotsav competitions to receiving civic honors for our social initiatives, our true achievement remains the love and support of the people.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
