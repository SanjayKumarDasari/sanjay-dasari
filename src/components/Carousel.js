import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Carousel = ({ children, interval = 3500, idleInterval = 30000 }) => {
  const [index, setIndex] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const count = React.Children.count(children);
  const autoRef = useRef();
  const idleRef = useRef();

  // Reset idle timer on user interaction
  useEffect(() => {
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(idleRef.current);
      idleRef.current = setTimeout(() => setIsIdle(true), idleInterval);
    };
    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('touchstart', resetIdle);
    resetIdle();
    return () => {
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('touchstart', resetIdle);
      clearTimeout(idleRef.current);
    };
  }, [idleInterval]);

  // Auto-scroll on interval or when idle
  useEffect(() => {
    clearTimeout(autoRef.current);
    if (isIdle) {
      autoRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % count);
      }, 2000);
    } else {
      autoRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % count);
      }, interval);
    }
    return () => clearTimeout(autoRef.current);
  }, [index, count, interval, isIdle]);

  const goTo = (i) => {
    setIndex(i);
    setIsIdle(false);
  };
  const prev = () => goTo((index - 1 + count) % count);
  const next = () => goTo((index + 1) % count);

  return (
    <div className="carousel">
      <button className="carousel-btn carousel-btn-left" onClick={prev} aria-label="Previous Project">&#8592;</button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {React.Children.map(children, (child, i) => (
          <div style={{ flex: '0 0 100%' }}>{child}</div>
        ))}
      </div>
      <button className="carousel-btn carousel-btn-right" onClick={next} aria-label="Next Project">&#8594;</button>
    </div>
  );
};

export default Carousel;
