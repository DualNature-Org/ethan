import React, { useRef, useEffect, useState } from 'react';

function YouTubeVideo() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const { top, bottom } = videoRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.src += "&";
    }
  }, [isVisible]);

  return (
    <div className="video-container">
      <iframe
        ref={videoRef}
        className={isVisible ? "visible" : ""}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/J1lNNmudBaw" 
        title="बच्चों पर ध्यान दिया जाए तो आत्महत्या नहीं करेंगे #viralvideo"
        allow="accelerometer;autoplay,clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
