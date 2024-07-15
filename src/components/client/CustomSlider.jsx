import React from 'react';
import './CustomSlider.css';
import FirstLogo from '../../assets/aramco.svg';
import SecondLogo from '../../assets/anydesk-logo.svg';
import ThirdLogo from '../../assets/deloitte.svg';
import FourthLogo from '../../assets/ebay.svg';
import FifthLogo from '../../assets/ibm.svg';
import SixthLogo from '../../assets/leo-burnett.svg';
import SeventhLogo from '../../assets/tietoevry-logo.svg';

const logos = [
    FirstLogo,
  SecondLogo,
  ThirdLogo,
    FourthLogo,
  FifthLogo,
  SixthLogo,
  SeventhLogo,
];

const CustomSlider = () => {
    return (
      <div className="slider-container container my-3">
        <div className="logo-slider">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-slide" key={index}>
              <img src={logo} alt={`Logo ${index}`} className="logos" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomSlider;