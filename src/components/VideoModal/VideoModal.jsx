import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ videoId, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!videoId) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <button className="video-modal-close" onClick={onClose}>
        <X size={32} />
      </button>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-wrapper">
          {videoId.endsWith('.mp4') ? (
            <video
              src={videoId}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
