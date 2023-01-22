import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: avatar1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facilis reprehenderit quibusdam quos. Harum cum nostrum tempora numquam! Neque adipisci quibusdam laborum optio voluptate debitis commodi est ex excepturi pariatur.",
  },
  {
    avatar: avatar2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facilis reprehenderit quibusdam quos. Harum cum nostrum tempora numquam! Neque adipisci quibusdam laborum optio voluptate debitis commodi est ex excepturi pariatur.",
  },
  {
    avatar: avatar3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facilis reprehenderit quibusdam quos. Harum cum nostrum tempora numquam! Neque adipisci quibusdam laborum optio voluptate debitis commodi est ex excepturi pariatur.",
  },
  {
    avatar: avatar4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facilis reprehenderit quibusdam quos. Harum cum nostrum tempora numquam! Neque adipisci quibusdam laborum optio voluptate debitis commodi est ex excepturi pariatur.",
  },
];

// =======================================================
//                  Testimonials
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="testimonial avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
