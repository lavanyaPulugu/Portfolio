import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Rahul talluri",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta cum blanditiis et similique, impedit consectetur animi vitae qui tempore reprehenderit ea debitis, architecto a rerum! Autem doloribus enim ratione.",
  },
  {
    avatar: AVTR2,
    name: "Richards Dasari",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta cum blanditiis et similique, impedit consectetur animi vitae qui tempore reprehenderit ea debitis, architecto a rerum! Autem doloribus enim ratione.",
  },
  {
    avatar: AVTR3,
    name: "Ricky Pulugu",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta cum blanditiis et similique, impedit consectetur animi vitae qui tempore reprehenderit ea debitis, architecto a rerum! Autem doloribus enim ratione.",
  },
  {
    avatar: AVTR4,
    name: "Rishi Pulugu",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta cum blanditiis et similique, impedit consectetur animi vitae qui tempore reprehenderit ea debitis, architecto a rerum! Autem doloribus enim ratione.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testi-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
