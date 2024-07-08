import React from 'react'
import Destination from "../../assets/destination.png"
import Mobile from "../../assets/mobile.png"
import Money from "../../assets/getmoney.png"
import Compass from "../../assets/compass.png"
import "./service.css"
const Services = () => {
    const serviceItems = [
        {
          src: Destination,
          title: '700+ Destinations',
          description: 'Hire the right trucks from Delhi NCR for pan India locations'
        },
        {
          src: Compass,
          title: 'GPS Enabled Trucks',
          description: 'Track your shipment 24x7 in real-time on the app'
        },
        {
          src: Mobile,
          title: 'One App Solution',
          description: 'Secure Payments, e-POD, e-Invoicing & complete trip management on app'
        },
        {
          src: Money,
          title: 'Competitive Pricing',
          description: 'Reliable truck transportation services at the right price'
        },
      
      ];
  return (
    <div className='service-slider'>
      <div className="container">
        <div className="row">
        <h2 className="text-center">Right Trucking Partner for Your Business</h2>
        <p className='text-center my-3 pb-4'>Experience hassle-free online truck booking without wasting money and time. Check estimated transportation costs and book trucks for your desired locations across India in just a few clicks. Here are some unnoticeable reasons why you should choose us:  </p>
        {serviceItems.map((item, index) => (
    <div className="col-lg-3 col-md-6 " key={index}>
      <div class="process-wrapper position-relative">
        <div class="process-icon arrow-right border-before">
          <img src={item.src} className="" />
        </div>
        <div className="bottom-items">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ))}
       </div>
      </div>
    </div>
  )
}

export default Services
