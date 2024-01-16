import React from "react";
import "./homeAbout.css";
import Card from "../../../component/card";
import { FaCalendarAlt, FaBaseballBall } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      <div className="content1">
        <b>WHAT DO WE OFFER?</b>
        <div className="para">
          <p>Empowering CSIT Growth, Tailored Solutions, Shaping Future Leaders.</p>
        </div>
        <div className="card-row">
          {/* First Row */}
          <Card
            title="Empowering Events"
            icon={<FaCalendarAlt />}
            body="We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students Industry ready upon graduation."
          />
          <Card title="Second Event" icon={<FaCalendarAlt />} body="Description of the second event." />
          <Card title="Third Event" icon={<FaCalendarAlt />} body="Description of the third event." />
        </div>
        <div className="card-row">
          {/* Second Row */}
          <Card
            title="Fourth Event"
            icon={<FaCalendarAlt />}
            body="We organize events on the regular, with the goal of covering up holes in the CSIT curriculum and making students Industry ready upon graduation."
          />
          <Card title="Fifth Event" icon={<FaBaseballBall />} body="Description of the fifth event." />
          <Card title="Sixth Event" icon={<FaCalendarAlt />} body="Description of the sixth event." />
        </div>
        {/* Add more rows or content as needed */}
      </div>
    </div>
  );
};

export default HomeAbout;
