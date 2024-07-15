import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Ecosystem.css'; 
import ecosystemImage from '../../assets/eco-transformed.jpg'

const Ecosystem = () => {
  return (
    <div className='ecosystem bg-white'>
      <Container className='ecosystem-container'>
        <Row>
          <Col md="6" className="text-section">
            <h2>Every Part of Your IT Ecosystem. Taken Care Of.</h2>
          
            <p>Comprehensive care of your cloud or on-premises infrastructure and applications:</p>
            <ul>
              <li>Consulting</li>
              <li>Implementation</li>
              <li>Management and support</li>
              <li>Security</li>
              <li>Help desk services</li>
              <li>Migration</li>
            </ul>
            <div class="explore-further left"><a href="#">Explore Further <i class="fa fa-arrow-right"></i></a></div>
          </Col>
          <Col md="6" className="image-section">
            <div className="step-in-right">
              <img src={ecosystemImage} alt="Ecosystem" className="img-fluid ecosystem-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ecosystem;