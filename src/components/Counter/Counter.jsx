import React from 'react';
import CountUp from 'react-countup';
import './Counter.css';

const Counter = () => {
  return (
    <div className="counter-container container">
      <div className="counter-item">
        <CountUp end={35} duration={2} className="countup" />
        <p>years of expertise</p>
      </div>
      <div className="divider"></div>
      <div className="counter-item">
        <CountUp end={750} duration={2} suffix="+" className="countup" />
        <p>IT professionals</p>
      </div>
      <div className="divider"></div>
      <div className="counter-item">
        <CountUp end={4000} duration={2} className="countup" />
        <p>success stories</p>
      </div>
      <div className="divider"></div>
      <div className="counter-item">
        <CountUp end={30} duration={2} suffix="+" className="countup" />
        <p>industries covered</p>
      </div>
    </div>
  );
}

export default Counter;