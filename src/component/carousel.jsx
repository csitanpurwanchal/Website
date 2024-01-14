// carousel.js

import React from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons
import "./carousel.css";

const Carousel = ({
  imgSource = "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/416318364_766877855483631_2637189327138196359_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9BfWoND4gPUAX9gFNW-&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDCAqA-bR2rky_n4sOGc4k5rkKnBqHBfWcVx8WhReW3BA&oe=65A92413",
  eventTitle = "Dummy Heading",
  onPrevClick,
  onNextClick,
}) => {
  return (
    <>
      <div className="carousel">
        <img src={imgSource} alt="Event Banner" />
        <div className="event-name">{eventTitle}</div>

        <div className="buttonslist">
          <button className="icon-button" onClick={onPrevClick}>
            <IoChevronBack />
          </button>
          <button className="icon-button" onClick={onNextClick}>
            <IoChevronForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
