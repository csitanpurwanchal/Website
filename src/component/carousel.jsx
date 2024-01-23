// carousel.js

import React from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons
import "./carousel.css";

const Carousel = ({
  imgSource = "https://media.discordapp.net/attachments/1192097257454063636/1199255383030644796/417740676_766146188890131_3733565436466369577_n.png?ex=65c1e09c&is=65af6b9c&hm=89afdbe145b632fc6eccf4682238b1a7f764998caf034dd707dade4143ed3314&=&format=webp&quality=lossless&width=701&height=701",
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
