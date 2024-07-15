import React, { useState, useRef } from 'react';
import './nav.css';
import { Button, CardBody, Nav, Card, Form, UncontrolledCollapse, Offcanvas, OffcanvasHeader, OffcanvasBody, NavLink } from 'reactstrap';

import Logo from '../../assets/logo-utl.png'
import SearchImage from '../../assets/searchboy.png'
const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const recognitionRef = useRef(null);
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };
    const closeSearch = () => {
        setSearchOpen(false);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const startVoiceRecognition = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support voice recognition.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognitionRef.current = recognition;
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchQuery(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Voice recognition error', event);
        };

        recognition.start();
    };
    const toggle = () => setIsOpen(!isOpen);

    const About = [
        [
            { name: 'About Us', link: '#' },
            { name: 'Mission', link: '#' },
            { name: 'Vision', link: '#' },
            { name: 'Values', link: '#' },
            { name: 'Leadership', link: '#' },
            { name: 'Our Clients', link: '#' },
            { name: 'Our Team', link: '#' },
            { name: 'Our Partners', link: '#' },
            { name: 'Our Locations', link: '#' },
           
        ],
        [
            { name: 'Our journey', link: '#' },
            { name: 'Careers', link: '#' },
            { name: 'Investors', link: '#' },
            { name: 'Faq', link: '#' },
            { name: 'News', link: '#' },
            { name: 'Client Testimonials', link: '#' },
            { name: 'Our Blog', link: '#' },
            { name: 'Awards', link: '#' },
        ]
    ];
    const Solutions = [
        [
            { name: 'ERP', link: '#' },
            { name: 'CRM', link: '#' },
            { name: 'Ecommerce', link: '#' },
            { name: 'eLearning', link: '#' },
            { name: 'Operations Management', link: '#' },
            { name: 'Asset Management', link: '#' },
            { name: 'Financial Management', link: '#' },
            { name: 'Payment Management', link: '#' },
            { name: 'Supply Chain Management', link: '#' },
           
        ],
        [
            { name: 'Human Resources', link: '#' },
            { name: 'Document Management', link: '#' },
            { name: 'Project Management', link: '#' },
            { name: 'Marketing & Advertising', link: '#' },
            { name: 'Content Management', link: '#' },
            { name: 'Kiosk Software', link: '#' },
            { name: 'Web Portals', link: '#' },
            { name: 'Fleet Management', link: '#' },
            { name: 'Sales Automation', link: '#' },
        ]
    ];
    const Industries = [
        [
            { name: 'Finance', link: '#' },
            { name: 'Banking', link: '#' },
            { name: 'Insurance', link: '#' },
            { name: 'Lending', link: '#' },
            { name: 'Investment', link: '#' },
            { name: 'Travel and Hospitality', link: '#' },
            { name: 'FinTech', link: '#' },
            { name: 'Transportation and Logistics', link: '#' },
            { name: 'Retail', link: '#' },
        ],
        [
            { name: 'Healthcare', link: '#' },
            { name: 'Energy', link: '#' },
            { name: 'Manufacturing', link: '#' },
            { name: 'Payments', link: '#' },
            { name: 'Professional Services', link: '#' },
            { name: 'Telecommunications', link: '#' },
            { name: 'Oil and Gas', link: '#' },
            { name: 'Construction', link: '#' },
            { name: 'Aerospace', link: '#' },
        ]
    ];
    const Technologies = [
        [
            { name: '.NET', link: '#' },
            { name: 'Java', link: '#' },
            { name: 'Python', link: '#' },
            { name: 'C++', link: '#' },
            { name: 'React', link: '#' },
            { name: 'Angular', link: '#' },
            { name: 'Node.js', link: '#' },
            { name: 'Docker', link: '#' },
            { name: 'Kubernetes', link: '#' },
            { name: 'AWS', link: '#' },
        ],
        [
            { name: 'AI', link: '#' },
            { name: 'ML', link: '#' },
            { name: 'DL', link: '#' },
            { name: 'TensorFlow', link: '#' },
            { name: 'PyTorch', link: '#' },
            { name: 'OpenAI', link: '#' },
            { name: 'Golang', link: '#' },
            { name: 'Rust', link: '#' },
            { name: 'Ruby', link: '#' },
            { name: 'JavaScript', link: '#' },
           
        ],
        [
            { name: 'TypeScript', link: '#' },
            { name: 'C#', link: '#' },
            { name: 'C', link: '#' },
            { name: 'Dart', link: '#' },
            { name: 'Flutter', link: '#' },
            { name: 'Swift', link: '#' },
            { name: 'Kotlin', link: '#' },
            { name: 'Go', link: '#' },
            { name: 'React Native', link: '#' },
            { name: 'React', link: '#' },
            { name: 'Vue.js', link: '#' },
        ]
    ];
   
    const Services = [
        [
            { name: 'Software Development', href: '#', hoverColor: '#773f1a' },
            { name: 'Web Development', href: '#', hoverColor: '#884e29' },
            { name: 'App Development', href: '#' },
            { name: 'Digital Marketing', href: '#' },
            { name: 'Branding', href: '#' },
            { name: 'Content Creation', href: '#', hoverColor: '#664228' },
            { name: 'UI/UX Design', href: '#', hoverColor: '#55371b' },
            { name: 'Logo Design', href: '#', hoverColor: '#442c14' },
            { name: 'Graphic Design', href: '#', hoverColor: '#884e29' },
            { name: 'SEO', href: '#' },
        ],
        [
            { name: 'Infrastructure Services', href: '#' },
            { name: 'Managed Services', href: '#' },
            { name: 'Digital Transformation', href: '#' },
            { name: 'IT Consulting', href: '#' },
            { name: 'IT Outsource', href: '#' },
            { name: 'IT Support', href: '#' },
            { name: 'Help Desk', href: '#' },
            { name: 'Data Analytics', href: '#' },
            { name: 'Game Development', href: '#' }
        ]
    ];
    const warmHoverColors = [
        '#E0FFCD',
        '#FDFFCD',
        '#FFEBBB',
        '#FFCAB0',
        '#FDFFAB',
        '#FFAAA5',
        '#11CBD7',
        '#C6F1E7',
        '#F0FFF3',
        '#FA4659',
        '#D4A5A5',
    ];


    const darkHoverTexts = warmHoverColors.map((color) => {
        const hslColor = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (hslColor) {
            const h = parseInt(hslColor[1], 16) / 255;
            const s = parseInt(hslColor[2], 16) / 255;
            const l = parseInt(hslColor[3], 16) / 255;
            const newL = Math.max(0, l - 0.6);
            return `hsl(${h * 360}, ${s * 100}%, ${newL * 100}%)`;
        }
        return color;
    });

    const handleHover = (event, index) => {
        const hoverColor = Services[index]?.hoverColor || darkHoverTexts[index % darkHoverTexts.length];
        event.target.style.backgroundColor = warmHoverColors[index % warmHoverColors.length];
        event.target.style.color = hoverColor;
        event.target.style.borderRadius = '5px';
        event.target.style.transition = 'border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out';
    };

    const handleLeave = (event) => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
        event.target.style.borderRadius = '0';
        event.target.style.transition = '';
    };
    // const toggleMobileMenu = () => setIsOpen(!isOpen);
    const [isOpenServices, setIsOpenServices] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const [isOpenIndustries, setIsOpenIndustries] = useState(false);
    const [isOpenSolutions, setIsOpenSolutions] = useState(false);
    const [isOpenTechnologies, setIsOpenTechnologies] = useState(false);

const toggleServicesMenu = () => setIsOpenServices(!isOpenServices);
const toggleAboutMenu = () => setIsOpenAbout(!isOpenAbout);
const toggleIndustriesMenu = () => setIsOpenIndustries(!isOpenIndustries);
const toggleSolutionsMenu = () => setIsOpenSolutions(!isOpenSolutions);
const toggleTechnologiesMenu = () => setIsOpenTechnologies(!isOpenTechnologies);
    return (
        <>
        <nav className="navbar header-menu navbar-expand-lg navbar-light px-lg-5">
            <div className="container-xl">
                <a className="navbar-brand" href="#" title="Logo">
                    <img src={Logo} alt="Logo" className="img-fluid" style={{ height: '70px' }} />
                </a>
                <Button
                    className="mobile-toggler"
                    title="Mobile toggler button"
                >
                    <i className="ri-menu-2-line" onClick={toggle} />
                </Button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mx-4">
                        <li className="nav-item mega-menu">
                            <a className="nav-link" href="#">
                                About <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu  bg-white w-25">
                                <div className="row">
                                    {About.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((about, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                        <a href={about.href}>{about.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mega-menu">
                            <a className="nav-link" href="#">
                                Services <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu  bg-white w-25">
                                <div className="row">
                                    {Services.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((service, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                            <a href={service.href}>{service.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mega-menu">
                            <a className="nav-link" href="#">
                                Solutions <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu  bg-white w-25">
                                <div className="row">
                                    {Solutions.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((solution, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                        <a href={solution.href}>{solution.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mega-menu">
                            <a className="nav-link" href="#">
                                Industries <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu  bg-white w-25">
                                <div className="row">
                                    {Industries.map((column, columnIndex) => (
                                        <div className="col-md-6" key={columnIndex}>
                                            <ul className="mega-menu-category">
                                                {column.map((industry, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                        <a href={industry.href}>{industry.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item  mega-menu">
                            <a className="nav-link" href="#">
                                Technologies <i className="ri-arrow-down-s-line" />
                            </a>
                            <div className="dropdown-mega-menu bg-white w-50">
                                <div className="row">
                                    <div className="lang-head " style={{borderBottom: '1px solid #ccc'}}>
                                        <h6 className='text-center'>  Technology We Use</h6>
                                    </div>
                                    {Technologies.map((column, columnIndex) => (
                                        <div className="col-lg-4" key={columnIndex}>
                                            <ul className="mega-menu-category " style={{borderRight: '1px solid #ccc' , borderLeft: '1px solid #ccc' }} >
                                                {column.map((technology, index) => (
                                                    <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave} style={{borderBottom: '1px solid #ccc' , BorderTop: '1px solid #ccc' }}>
                                                        <a href={technology.link}>{technology.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item  mega-menu">
                            <a className="nav-link" href="#">
                                Portfolio 
                            </a>
                        </li>
                        <li className="nav-item">
                        <NavLink onClick={toggleSearch}>
                                <i className="fas fa-search"></i>
                            </NavLink>
                        </li>
                        {/* create here a rounded button with the text "Contact Us" and a background color of #773f1a and a text color of #fff and a hover color of #884e29 */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
                    <OffcanvasHeader toggle={toggle}>
                        Menus
                    </OffcanvasHeader>
                    <OffcanvasBody>

                        <button className="nav-link position-relative"  id="services-menu-button" onClick={toggleServicesMenu}>
                            Services <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#services-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {Services.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((service, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={service.href}>{service.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <button className="nav-link position-relative second-mobile" id="about-menu-button" onClick={toggleAboutMenu}>
                            About Us <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#about-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {About.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((about, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={about.href}>{about.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                            <button className="nav-link position-relative second-mobile" id="industries-menu-button" onClick={toggleIndustriesMenu}>
                            Industries <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#industries-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {Industries.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((industry, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={industry.href}>{industry.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                            <button className="nav-link position-relative second-mobile" id="technologies-menu-button" onClick={toggleTechnologiesMenu}>
                            Technologies <i className="ri-arrow-down-s-line" 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#technologies-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {Technologies.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((technology, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={technology.link}>{technology.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                            <button className="nav-link position-relative second-mobile" id="solutions-menu-button" onClick={toggleSolutionsMenu}>
                        Solutions <i className={isOpenSolutions ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} 
                                style={{
                                    marginBottom: '1rem'
                                }} />

                        </button>
                        <UncontrolledCollapse toggler="#solutions-menu-button">
                            <Card>
                                <CardBody>
                                    <div className={`mobile-megamenu ${isOpen ? 'show' : ''}`}>
                                        <div className="row">
                                            {Solutions.map((column, columnIndex) => (
                                                <div className="col-md-12 mobile-border" key={columnIndex}>
                                                    <ul className="mega-menu-category" key={columnIndex}>
                                                        {column.map((solution, index) => (
                                                            <li key={index} onMouseEnter={(e) => handleHover(e, index)} onMouseLeave={handleLeave}>
                                                                <a href={solution.href}>{solution.name}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    

                    </OffcanvasBody>
                </Offcanvas>
            </div>

            
        </nav>
        <div className={`search-drawer ${searchOpen ? 'open' : ''}`}>
                <img src={SearchImage} alt="Search" className="search-image" />
                <Form className="search-form">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control mr-sm-2"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <i className="fas fa-microphone voice-icon" style={{ cursor: 'pointer' }} onClick={startVoiceRecognition}></i>
                </Form>
                <Button variant="outline-primary" className="close-search" onClick={closeSearch}>
                    <i className="fas fa-times"></i>
                </Button>
            </div>
        </>
    );
};

export default CustomNavbar;
