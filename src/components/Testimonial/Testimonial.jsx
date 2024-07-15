import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import "./testimonial.css";
const Avatar1 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const Avatar2 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const Avatar3 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const Avatar4 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const Avatar5 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const Avatar6 = "https://utlitsolution.com/wp-content/uploads/2021/03/imgpsh_fullsize_anim-6.png"; 
const testimonials = [
  {
    title: 'Card title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Mahesh Kumar',
    position: 'MDS Manufacturing',
    rating: 4,
    avatar: Avatar1
  },
  {
    
   
    title: 'Card title 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Abhinav Batra',
    position: 'MDS Manufacturing',
    rating: 4,
    avatar: Avatar2
  },
  {

    title: 'Card title 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Shalini Jha',
    position: 'MDS Manufacturing',
    rating: 5,
    avatar: Avatar3
  },
  {
    title: 'Card title 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Shalini Jha',
    position: 'MDS Manufacturing',
    rating: 5,
    avatar: Avatar4
  },
  {
    title: 'Card title 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Rohit Sharma',
    position: 'XYZ Corporation',
    rating: 4,
    avatar: Avatar5
  },
  {
    title: 'Card title 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    name: 'Anjali Verma',
    position: 'ABC Enterprises',
    rating: 5,
    avatar: Avatar6
  },

];
const Testimonial = () => {
  return (
    <div className='testimonial-slider container'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              navigation
              pagination={{ clickable: true }}
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
                  <div className="card testi-card custom-card">
                    <div className="card-body custom-card-body">
                      <p className="card-text custom-card-text">{testimonial.text}</p>
                      <div className="card-bottom d-flex align-items-center custom-card-bottom">
                        <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                        <div className="custom-card-info">
                          <p className="card-title fw-bold mb-0 custom-card-title">{testimonial.name}</p>
                          <p className="custom-card-position">{testimonial.position}</p>
                        </div>
                        <div className="d-flex custom-card-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star text-warning mx-1 custom-star"></i>
                          ))}
                        </div>
                      </div>
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