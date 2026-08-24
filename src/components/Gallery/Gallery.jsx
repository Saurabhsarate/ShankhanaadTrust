import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="gallery-masonry">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item hover-zoom image-reveal visible"
            onClick={() => openLightbox(index)}
          >
            <img src={img.url} alt={img.alt || 'Gallery image'} loading="lazy" />
            <div className="gallery-item-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className="lightbox-nav prev" onClick={showPrev}>
            <ChevronLeft size={48} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedImageIndex].url} 
              alt={images[selectedImageIndex].alt} 
            />
            {images[selectedImageIndex].alt && (
              <p className="lightbox-caption">{images[selectedImageIndex].alt}</p>
            )}
          </div>

          <button className="lightbox-nav next" onClick={showNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
