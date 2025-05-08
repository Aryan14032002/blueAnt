import React, { useState, useEffect } from 'react';
import './GalleryPage.css';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  'workshop-1.jpg', 'workshop-4.jpg', 'workshop-6.jpg',
  'workshop-7.jpg', 'workshop-11.jpg', 'workshop-18.jpg',
  'workshop-19.jpg', 'workshop-8.jpg', 'workshop-9.jpg',
  'workshop-10.jpg', 'workshop-12.jpg', 'workshop-2.jpg',
  'workshop-3.jpg', 'workshop-5.jpg', 'workshop-13.jpg',
  'workshop-14.jpg', 'workshop-15.jpg', 'workshop-17.jpg',
  'workshop-16.jpg', 'workshop-20.jpg'
];

function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isThumbnailView, setIsThumbnailView] = useState(false);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSlideshowActive(false);
  };

  const navigateImages = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  };

  const toggleThumbnailView = () => {
    setIsThumbnailView(!isThumbnailView);
  };

  const toggleSlideshow = () => {
    setIsSlideshowActive(!isSlideshowActive);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    let interval;
    if (isSlideshowActive) {
      interval = setInterval(() => {
        navigateImages(1);
      }, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isSlideshowActive, currentImageIndex]);

  return (
    <div className="gallery-page">
      <div className="workshop-header">
        <img src="/galleryheroimage.jpg" alt="Workshop" className="header-img" />
        <h1>Gallery</h1>
      </div>

      <div className="symposium-section">
        <span className="symposium-badge">Snapshots from the Summit</span>
        <h2>Strengthen Your Finances, Secure Your Future</h2>
      </div>

      <div className="gallery-flex">
        {images.map((src, idx) => (
          <div
            className="gallery-item"
            key={idx}
            onClick={() => openModal(idx)}
            data-aos="fade-up"
          >
            <img src={src} alt={`Workshop ${idx + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div
            className={`modal-content ${isThumbnailView ? 'show-thumbnails' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-nav left" onClick={() => navigateImages(-1)}>
              <FaChevronLeft size={24} />
            </button>

            <div className="modal-image-container">
              <div className="modal-top-controls">
                <span className="modal-number">{currentImageIndex + 1}/{images.length}</span>
                <button className="show-all-btn" onClick={toggleThumbnailView}>
                  {isThumbnailView ? 'Hide Images' : 'Show All Images'}
                </button>
                <button className="slideshow-btn" onClick={toggleSlideshow}>
                  {isSlideshowActive ? 'Stop Slideshow' : 'Start Slideshow'}
                </button>
              </div>
              <img
                src={images[currentImageIndex]}
                alt={`Full-screen Workshop ${currentImageIndex + 1}`}
                className="modal-img"
              />
            </div>

            <button className="modal-nav right" onClick={() => navigateImages(1)}>
              <FaChevronRight size={24} />
            </button>

            <button className="modal-close" onClick={closeModal}>
              <FaTimes size={22} />
            </button>
          </div>

          {isThumbnailView && (
            <div className="thumbnail-grid">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className={`thumbnail-item ${currentImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
