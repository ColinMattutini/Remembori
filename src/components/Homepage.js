import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashCard from "./FlashCard/FlashCard";
import classes from "./Homepage.module.css";
import ReviewPage from "./Review/ReviewPage";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";

const Homepage = () => {
  const nav = useNavigate();

  const [name, setName] = useState(Object.keys(localStorage));

  const createHandler = () => {
    nav("/createset");
  };

  const reviewHandler = () => {
    nav("/reviewset");
  };

  const setNavHandler = (set) => {
    nav("/review/" + set);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.alignment}>
          <div className={classes.header}>
            <h2>Remembori</h2>
          </div>
        </div>
        <div className={classes.midSection}>
          <div className={classes.reviewButton}>
            <h2>Your Sets:</h2>
            <button onClick={reviewHandler}>View All</button>
          </div>
        </div>
        <div className={classes.swiperAdjust}>
          <Swiper
            navigation={true}
            modules={[Virtual, Navigation]}
            spaceBetween={25}
            virtual
            centeredSlides={true}
            slidesPerView={1.2}
          >
            {name.map((slideContent, index) => (
              <SwiperSlide
                key={slideContent}
                virtualIndex={index}
                onClick={() => setNavHandler(slideContent)}
              >
                <div className={classes.card}>{slideContent}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={classes.buttonstack}>
          <button onClick={createHandler}>Create New Set</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
