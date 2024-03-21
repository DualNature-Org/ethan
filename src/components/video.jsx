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
      videoRef.current.src += "&autoplay=1";
    }
  }, [isVisible]);

  return (
    <div className="video-container">
      <iframe
        ref={videoRef}
        className={isVisible ? "visible" : ""}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HiwnB2aV7P0?si=dgeKucGCVSGgefmX"  // Replace VIDEO_ID_HERE with the actual YouTube video ID
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
