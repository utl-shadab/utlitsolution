import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './hero.css';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["encourage", "support", "drive", "boost"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); 

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="hero-section">
      <Container className="text-center text-white hero-content">
        <h1>Software Consulting and Development</h1>
        <p>
          We <span className="typed-word">{words[currentWordIndex]}</span> project success
        </p>
      </Container>
    </div>
  );
};

export default Hero;