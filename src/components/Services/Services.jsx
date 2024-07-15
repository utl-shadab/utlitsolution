import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import "./service.css";

const Services = () => {
  const [activeKey, setActiveKey] = useState('software-development');

  const serviceItems = [
    { key: 'software-development', title: 'Software Development', content: 'A software development company with 35 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.' },
    { key: 'testing-qa', title: 'Testing & QA', content: 'Our experts help mid-sized and large firms build, test, protect, manage, migrate and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO.' },
    { key: 'application-services', title: 'Application Services', content: 'Application Services content goes here.' },
    { key: 'ux-ui-design', title: 'UX/UI Design', content: 'User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.' },
    { key: 'it-consulting', title: 'IT Consulting', content: 'Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.' },
    { key: 'data-analytics', title: 'Data Analytics', content: 'We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.' },
    { key: 'help-desk-services', title: 'Help Desk Services', content: 'Help desk services for your IT environment or software products. We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning and increased end user satisfaction.' },
    { key: 'infrastructure-services', title: 'Infrastructure Services', content: 'We apply our 17 years of experience to offer a full set of infrastructure services. Being ISO 27001 certified, we guarantee that cooperation with us does not pose any risks to our customers’ data security.' },
    { key: 'cybersecurity-services', title: 'Cybersecurity Services', content: 'Equipped with 21 years of experience in information security and employing ISO 27001 certified information security management practices, we help to achieve the robust protection of the companies’ applications and networks.' },
  ];

  return (
    <div className="container service-container">
      <h2 className='service-title'>Explore Our Offering</h2>
      <TabContent activeTab={activeKey}>
        <Row>
          <Col sm="3">
            <Nav pills className="flex-column">
              {serviceItems.map(item => (
                <NavItem key={item.key}>
                  <NavLink
                    className={activeKey === item.key ? 'active' : ''}
                    onClick={() => setActiveKey(item.key)}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col sm="9">
            <TabPane tabId={activeKey}>
              {serviceItems.map(item => (
                <div key={item.key} className={activeKey === item.key ? 'd-block h-100 p-5' : 'd-none'}>
                  <h3 className='service-title-inner'>{item.title}</h3>
                  <p className='service-content'>{item.content}</p>
                  {item.key === 'software-development' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'testing-qa' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'application-services' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'ux-ui-design' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'infrastructure-services' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'cybersecurity-services' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'data-analytics' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  {item.key === 'help-desk-services' && (
                    <ul className='list-unstyled list-group'>
                      <li className='list-group-item'>Software consulting</li>
                      <li className='list-group-item'>Software development outsourcing</li>
                      <li className='list-group-item'>Team augmentation</li>
                      <li className='list-group-item'>Legacy software modernization</li>
                      <li className='list-group-item'>Custom software development</li>
                      <li className='list-group-item'>Software product development</li>
                      <li className='list-group-item'>Cloud application development</li>
                    </ul>
                  )}
                  
                    <div className='explore-further '>
                      <a href='#'>Explore Further <i className='fa fa-arrow-right'></i></a>
                    </div>
                </div>
              ))}
            </TabPane>
          </Col>
        </Row>
      </TabContent>
    </div>
  );
};

export default Services;