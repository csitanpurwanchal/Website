import React from "react";
import "./whoAreWe.css"; // Import the updated CSS file

const WhoAreWe = () => {
  return (
    <section className="who-we-are-section">
      <h2 className="who-we-are-heading">WHO WE ARE?</h2>
      <div className="who-we-are-underline"></div>
      <div className="who-we-are-content">
        <div className="who-we-are-image-container">
          <img
            src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/467741500_980948417409906_5319415709275800415_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lc6I9r65UyYQ7kNvgEW-GAP&_nc_oc=Adjt2K83QjnTonMNoglOdla48Ou1of8wF7BoqoSjoV41qoaMZ9LWbyUj_oFNb3hxJqYSTOE2hZGV5qiCPADDWMVC&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AEKF9zFodHVMIII2MIBhIj3&oh=00_AYAPIiWUa0SDYGvwO-RlK-iqbqSTUa7k0xDulTZvvyJp6g&oe=678D07D2" // Replace with your image path
            alt="About Us"
            className="who-we-are-image"
          />
        </div>
        <div className="who-we-are-text-container">
          <p className="who-we-are-text">
            CSITAN is an autonomous, non-profitable, non-governmental, non-political, service-oriented social organization established by the young energetic BSc CSIT students in 2011 to act as a bridge between the faculty, students, and IT industries in Nepal.
          </p>
          <button className="who-we-are-btn">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
