import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero/Hero';
import VideoModal from '../components/VideoModal/VideoModal';
import orgData from '../data/organization.json';
import performancesData from '../data/performances.json';
import { PlayCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const { t } = useTranslation();
  
  const featuredPerformanceData = performancesData[0];
  const translatedPerformances = t('performances.items', { returnObjects: true }) || [];
  const featuredPerformance = { ...featuredPerformanceData, ...(translatedPerformances[0] || {}) };

  const stats = [
    { value: "10+", label: t('stats.legacy') },
    { value: "500+", label: t('stats.vadaks') },
    { value: "200+", label: t('stats.performances') },
    { value: "1M+", label: t('stats.hearts') }
  ];

  return (
    <div className="home-page">
      <Hero 
        title={t('home.title')}
        subtitle={t('home.subtitle')}
        videoSrc="/videos/hero.mp4"
        ctas={[
          { label: t('home.ctaDiscover'), link: "/about" },
          { label: t('home.ctaConnect'), link: "/contact" }
        ]}
      />

      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2 className="fade-up visible">{t('home.whoWeAre.title')}</h2>
              <p className="intro-text fade-up delay-200 visible">
                {t('home.whoWeAre.text')}
              </p>
              <Link to="/about" className="btn btn-outline fade-up delay-400 visible" style={{ marginTop: '2rem' }}>
                {t('home.whoWeAre.readStory')}
              </Link>
            </div>
            <div className="intro-image-wrapper image-reveal visible">
              <video 
                src="/videos/who-we-are.mp4" 
                className="intro-image" 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-up visible" style={{ transitionDelay: `${index * 100}ms` }}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-performance">
        <div className="container">
          <div className="section-header text-center fade-up visible">
            <h2>{t('home.featured.title')}</h2>
            <p className="section-subtitle">{t('home.featured.subtitle')}</p>
          </div>
          
          {featuredPerformance && (
            <div className="featured-card fade-up delay-200 visible">
              <div className="featured-image-wrapper">
                <video 
                  src={`${featuredPerformance.videoId}#t=0.001`}
                  poster={featuredPerformance.thumbnail}
                  muted 
                  playsInline 
                  preload="metadata"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                />
                <button 
                  className="play-btn"
                  onClick={() => setActiveVideo(featuredPerformance.videoId)}
                  aria-label="Play Video"
                >
                  <PlayCircle size={64} />
                </button>
              </div>
              <div className="featured-content">
                <h3>{featuredPerformance.title}</h3>
                <p className="featured-meta">{featuredPerformance.year} • {featuredPerformance.location}</p>
                <p>{featuredPerformance.description}</p>
                <Link to="/performances" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  {t('home.featured.viewAll')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="fade-up visible">{t('home.ctaSection.title')}</h2>
          <p className="fade-up delay-200 visible">{t('home.ctaSection.subtitle')}</p>
          <div className="cta-buttons fade-up delay-400 visible">
            <Link to="/about" className="btn btn-primary">{t('home.ctaSection.watchJourney')}</Link>
            <Link to="/contact" className="btn btn-outline">{t('home.ctaConnect')}</Link>
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default Home;
