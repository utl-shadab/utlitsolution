import React from 'react';
import "./logoslider.css";
import Circle from "../../assets/circle.png";
import Ai from "../../assets/logoAi.png";

const LogoSlider = () => {
  // Array of logo objects
  const logos = [
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
    { src: Ai, alt: "AI Logo" },
  ];
  const SecondSlider = [
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
    { src: Circle, alt: "Circle Logo" },
  ];

  return (
    <div>
      <div class="slider container-fluid">
        <h2 className="text-center">Brands Who Trust Us</h2>
        <div class="slide-track">
          {logos.map((logo, index) => (
            <div key={index} class="slide">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
        <div class="slide-track-2 ">
          {SecondSlider.map((logo, index) => (
            <div key={index} class="slide">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
