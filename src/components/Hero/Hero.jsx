import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, bgImage, videoSrc, ctas }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // Subtle parallax effect on the background while maintaining vertical center
        heroRef.current.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef} style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}>
      <div className="hero-overlay"></div>
      
      {videoSrc && (
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="container hero-content">
        <h1 className="hero-title fade-up visible">{title}</h1>
        {subtitle && (
          <p className="hero-subtitle fade-up delay-200 visible">{subtitle}</p>
        )}
        
        {ctas && ctas.length > 0 && (
          <div className="hero-ctas fade-up delay-400 visible">
            {ctas.map((cta, index) => (
              <Link 
                key={index} 
                to={cta.link} 
                className={`btn ${index === 0 ? 'btn-primary' : 'btn-outline'}`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
