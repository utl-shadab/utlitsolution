import React from 'react';
import './footer.css'; // Ensure you have the appropriate CSS for styling

const footerData = {
    about: [
        { text: 'Account Terms And Conditions For GPS', link: '#' },
        { text: 'Privacy Policy', link: '#' },
        { text: 'Terms And Conditions For Bazaar', link: '#' },
        { text: 'Privacy Policy for Bazaar', link: '#' },
        { text: 'Terms Of Use', link: '#' },
        { text: 'Cookie Policy', link: '#' },
        { text: 'Careers', link: '#' },
      ],
  address: [
    '123 Main Street,',
    'City, Country,',
    'ZIP Code',
  ],
  contact: [
    { type: 'Email', value: 'info@company.com' },
    { type: 'Phone', value: 'Call Us Toll Free No : 1800-2121-255' },
    { type: 'Phone', value: 'Direct No : +91 9760037728, +91 9870652819' },
  ],
  social: [
    { icon: 'fab fa-facebook', title: 'Facebook', link: '#' },
    { icon: 'fab fa-pinterest', title: 'Pinterest', link: '#' },
    { icon: 'fab fa-skype', title: 'Skype', link: '#' },
    { icon: 'fab fa-twitter', title: 'Twitter', link: '#' },
  ]
  
};

const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              {/* Footer Logo*/}
              <div className="footer-logo mb-3">LOGO</div>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam,</p>
            </div>
          </div>
          
          {/* Center Section */}
          <div className="col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title */}
              <h3 className="widget-title">Navigation</h3>
              {/* Footer Menu */}
              <div className="footer_menu">
                <ul>
                  {footerData.about.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title */}
              <h3 className="widget-title">Call Us</h3>
              {/* Address */}
              <div className="footer_address">
                {footerData.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              {/* Contact Info */}
              <div className="footer_contact_info">
                {footerData.contact.map((info, index) => (
                  <p key={index}>
                    <strong>{info.type}:</strong> {info.value}
                  </p>
                ))}
              </div>
              {/* Footer Social Area */}
              <div className="footer_social_area">
                {footerData.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={social.title}
                  >
                    <i className={`fa ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
