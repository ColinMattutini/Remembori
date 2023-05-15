import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Homepage.module.css";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import NotesSwiper from "./NotesSwiper";
import NewNoteTitleModal from "./NewNoteTitleModal";

const Homepage = () => {
  const nav = useNavigate();

  const [name, setName] = useState(Object.keys(localStorage));
  const [notes, setNotes] = useState(Object.keys(localStorage));
  let fixName = name.filter((e) => !e.includes("TXT NOTES "));
  fixName = fixName.filter((e) => !e.includes("Cog"));

  let noteName = notes.filter((e) => e.includes("TXT NOTES "));

  const [newSetState, setNewSetState] = useState(false);

  let termLength = [];
  let blankSets = false;
  let blankNotes = false;

  for (let i = 0; i < fixName.length; i++) {
    termLength.push(JSON.parse(localStorage.getItem(fixName[i])).length);
  }

  if (fixName.length === 0) {
    blankSets = true;
  } else {
    blankSets = false;
  }

  if (noteName.length === 0) {
    blankNotes = true;
  } else {
    blankNotes = false;
  }

  const createHandler = () => {
    nav("/createset");
  };

  const reviewHandler = () => {
    nav("/reviewset");
  };

  const setNavHandler = (set) => {
    nav("/review/" + set);
  };

  const newNoteStateHandler = () => {
    newSetState ? setNewSetState(false) : setNewSetState(true);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        {newSetState && (
          <NewNoteTitleModal newNoteStateHandler={newNoteStateHandler} />
        )}
        <div className={classes.alignment}>
          <div className={classes.header}>
            <h2>Remembori</h2>
          </div>
        </div>
        <h2>Your Notes:</h2>
        <NotesSwiper />
        {blankNotes && (
          <Swiper>
            <div className={classes.card}>
              <div className={classes.title}>No Notes Currently</div>
            </div>
          </Swiper>
        )}
        <div className={classes.midSection}>
          <div className={classes.reviewButton}>
            <h2>Your Sets:</h2>
            <button onClick={reviewHandler}>View All</button>
          </div>
        </div>
        <div className={classes.swiperAdjust}>
          {blankSets && (
            <Swiper spaceBetween={25} centeredSlides={true}>
              <SwiperSlide>
                <div className={classes.card}>
                  <div className={classes.title}>No Card Sets Currently</div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          <Swiper
            navigation={true}
            modules={[Virtual, Navigation]}
            spaceBetween={55}
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
                  <div className={classes.terms}>{termLength[index]} Cards</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
