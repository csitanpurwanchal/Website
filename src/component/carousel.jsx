// carousel.js

import React from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons
import "./carousel.css";

const Carousel = ({
  imgSource = "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/472710187_1014626884042059_6255317418403435029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fmv58Ny1MY0Q7kNvgG1kj3A&_nc_oc=Adhmr2CW2sSzqxz_eMH4kBLZBrfqjWcDkx0FuQcGxNJsUFECNnAJuq67WwlzrQd41dvflaMWKrVtJMDwxeGQWEYv&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A3qhg6qk_KkrL23A46L8fGZ&oh=00_AYBpd31c7apeODZG4Rqe5PZ4Fox773DWnPKv9YLrLOzRNg&oe=678D6810",
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
