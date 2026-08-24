import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero/Hero';
import VideoModal from '../components/VideoModal/VideoModal';
import performancesData from '../data/performances.json';
import { PlayCircle } from 'lucide-react';
import './Performances.css';

const Performances = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const { t } = useTranslation();

  const translatedItems = t('performances.items', { returnObjects: true }) || [];
  const mergedPerformances = performancesData.map((p, i) => ({
    ...p,
    ...(translatedItems[i] || {})
  }));

  const categories = ['ALL', ...new Set(mergedPerformances.map(p => p.category))];

  const filteredPerformances = filter === 'ALL' 
    ? mergedPerformances 
    : mergedPerformances.filter(p => p.category === filter);

  return (
    <div className="performances-page">
      <Hero 
        title={t('performances.heroTitle')}
        subtitle={t('performances.heroSubtitle')}
        bgImage="/images/gallery/gallery-2.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="filter-container fade-up visible">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'ALL' ? t('performances.filterAll') : cat}
              </button>
            ))}
          </div>

          <div className="performances-grid">
            {filteredPerformances.map((perf, index) => (
              <div key={perf.id} className={`performance-card fade-up visible delay-${(index % 3 + 1) * 100}`}>
                <div className="perf-image-wrapper">
                  <video 
                    src={`${perf.videoId}#t=0.001`}
                    poster={perf.thumbnail}
                    muted 
                    playsInline 
                    preload="metadata"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                  <button 
                    className="play-btn"
                    onClick={() => setActiveVideo(perf.videoId)}
                    aria-label="Play Video"
                  >
                    <PlayCircle size={48} />
                  </button>
                </div>
                <div className="perf-content">
                  <span className="perf-category">{perf.category}</span>
                  <h3>{perf.title}</h3>
                  <div className="perf-meta">
                    <span>{perf.year}</span>
                    <span>{perf.location}</span>
                  </div>
                  <p>{perf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default Performances;
