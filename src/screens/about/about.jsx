// components/About.js
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import "./about.css";
const About = () => {
  const headings = ["Inroduction", "Our Missions", "Our Team"];
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const contentRefs = headings.map(() => useRef());

  const handleScroll = (index) => {
    contentRefs[index].current.scrollIntoView({ behavior: "smooth" });
    setHighlightedIndex(index);
  };

  const handleRef = (ref, index) => {
    contentRefs[index].current = ref;
  };

  const handleHighlight = (index) => {
    setHighlightedIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionIndex = null;

      contentRefs.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionIndex = index;
        }
      });

      setHighlightedIndex(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="pageheading">
        <div className="content">About Us</div>
      </div>
      <div className="about">
        <Sidebar
          headings={headings}
          handleScroll={handleScroll}
          highlightedIndex={highlightedIndex}
        >
          <Content
            headings={headings}
            handleRef={handleRef}
            handleHighlight={handleHighlight}
          />
        </Sidebar>
      </div>
    </div>
  );
};

export default About;
