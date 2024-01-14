import React from "react";
import Hero from "./components/hero";
import HomeAbout from "./components/homeAbout";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <HomeAbout />
      </div>
    </>
  );
};

export default Home;
