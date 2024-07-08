import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Coma from "../../assets/coma.png";
import "./testimonial.css";
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const testimonials = [
  {
    image: Slide1,
    coma: Coma,
    title: 'Card title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name:'Mahesh Kumar',
    position:'MDS Manufacturing',
    rating: 4
  },
 
  {
    image: Slide2,
    coma: Coma,
    title: 'Card title 2',
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name:'Abhinav Batra',
    position:'MDS Manufacturing',
    rating: 4
  },
  {
    image: Slide2,
    coma: Coma,
    title: 'Card title 2',
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name:'Shalini Jha',
    position:'MDS Manufacturing',
    rating: 5
  },
  {
    image: Slide2,
    coma: Coma,
    title: 'Card title 2',
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name:'Shalini Jha',
    position:'MDS Manufacturing',
    rating: 5
  },
  
];

const Testimonial = () => {
  return (
    <div className='testimonial-slider'>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="testimonial-title">
            <h2>Connect with other members</h2>
          </div>
          <p className='test-para my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          <button className='px-5 py-3 testimonial-button'>Connect Now</button>
        </div>
        <div className="col-lg-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1840: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card testi-card">
                  <div className="img-wrapper position-relative">
                    <img src={testimonial.image} className="d-block w-100" alt={testimonial.title} />
                    <img src={testimonial.coma} className="d-block  coma" alt="coma" />
                  </div>
                  <div className="card-body">
                    <p className="card-text">{testimonial.text}</p>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <p className="card-title fw-bold mb-0">{testimonial.name}</p>
                      <div className="d-flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fa fa-star text-warning mx-1"></i>
                        ))}
                      </div>
                    </div>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Testimonial;
