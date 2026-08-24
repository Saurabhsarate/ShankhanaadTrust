import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import './Media.css';

const Media = () => {
  const { t } = useTranslation();
  // Gallery images from the images folder
  const galleryImages = Array.from({ length: 15 }).map((_, i) => ({
    url: `/images/gallery/gallery-${i + 1}.jpeg`,
    alt: `Shankhanaad Media Photo ${i + 1}`
  }));

  return (
    <div className="media-page">
      <Hero 
        title={t('media.heroTitle')}
        subtitle={t('media.heroSubtitle')}
        bgImage="/images/gallery/gallery-4.jpeg"
      />

      <section className="section" id="gallery">
        <div className="container">
          <div className="section-header text-center fade-up visible">
            <h2>{t('media.galleryTitle')}</h2>
            <p className="section-subtitle">{t('media.gallerySubtitle')}</p>
          </div>
          
          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className="section press-section" id="press">
        <div className="container text-center">
          <h2 className="fade-up visible">{t('media.pressTitle')}</h2>
          <p className="fade-up delay-200 visible" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            {t('media.pressDesc')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Media;
