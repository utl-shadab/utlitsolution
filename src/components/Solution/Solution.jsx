import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import './Solution.css';

const Solution = () => {
  const solutions = [
    "Enterprise applications", "ERP", "Financial management", "Supply chain management",
    "Asset management", "Fleet management", "HR software", "eLearning software",
    "eCommerce", "Mobile apps", "Collaboration and productivity solutions", "Content management",
    "CRM", "Data analytics", "Web portals", "ITSM"
  ];

  return (
    <div className="solution-section">
      <Container>
        <h2 className="text-center text-white">Solutions We Deliver</h2>
        <p className="text-center text-white">We IT-enable all kinds of B2B, B2C interactions and internal operations.</p>
        <Row>
          {solutions.map((solution, index) => (
            <Col md="3" sm="6" xs="12" key={index} className="mb-4">
              <Card className="solution-card">
                <CardBody className='d-flex align-items-center justify-content-center'>
                  <CardText className="text-center">
                    <a href="#" className="text-decoration-none solution-link">{solution}</a>
                    <span className='arrow-solution'><i className="fa fa-arrow-right"></i></span>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Solution;