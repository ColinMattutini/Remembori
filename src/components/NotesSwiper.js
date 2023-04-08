import React from "react";
import classes from "./Homepage.module.css";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotesSwiper = () => {
  const [name, setName] = useState(Object.keys(localStorage));
  const nav = useNavigate();

  let termLength = [];
  let blankSets = false;

  let fixName = name.filter((e) => e.includes("TXT NOTES "));
  for (let i = 0; i < fixName.length; i++) {
    fixName[i] = fixName[i].replace("TXT NOTES ", "");
  }

  for (let i = 0; i < name.length; i++) {
    termLength.push(JSON.parse(localStorage.getItem(name[i])).length);
  }

  const setNavHandler = (notes) => {
    nav("/notesedit/TXT NOTES " + notes);
  };

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Virtual, Navigation]}
        spaceBetween={25}
        virtual
        centeredSlides={true}
        slidesPerView={1.2}
      >
        {fixName.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            onClick={() => setNavHandler(slideContent)}
          >
            <div className={classes.card}>
              <div className={classes.title}>{slideContent}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NotesSwiper;
