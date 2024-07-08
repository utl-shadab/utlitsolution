import React from 'react';
import Map from "../../assets/map.png";
import Semi from "../../assets/semi.png";
import Excellence from "../../assets/excellence.png";
import "./platform.css";

const Platform = () => {
  const PlatformItems = [
    {
      src: Map,
      title: '2Mn+ Trucks',
      description: 'Across 21 truck types with all GVWs, Lengths and Heights are available'
    },
    {
      src: Semi,
      title: '1 MN+ Trips',
      description: 'Completed with an efficiency of 99% on-time delivery performance'
    },
    {
      src: Excellence,
      title: '50000+ Clients',
      description: 'Businesses across India think of us when they think of transport services'
    },
  ];

  return (
    <div className='platform'>
      <div className="container">
        <div className="row">
            <h2 className="text-center mb-4 pb-3 text-white">India’s Largest Trucking Platform</h2>
          {PlatformItems.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div class="Platform-card">
                <div class="platform-icon">
                  <img src={item.src} alt={item.title} /> 
                </div>
                <h3 className='head-title'>{item.title}</h3>
                <p className='head-para'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
