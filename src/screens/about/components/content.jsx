// Content component
import React, { useState } from "react";
import "./content.css";
import { GrConnect } from "react-icons/gr";
import { GiLifeSupport } from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import TeamMemberCard from "../../../component/teamMemberCard";

const Content = ({ headings, handleRef, handleHighlight }) => {
  const [teamYear, setTeamYear] = useState(2023); // State to track selected year
  const teamMembersData2023 = [
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl: "https://example.com/pukar.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl: "https://example.com/pukar.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl: "https://example.com/pukar.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl: "https://example.com/pukar.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl: "https://example.com/pukar.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },

    // Other 2023 team members...
  ];

  const teamMembersData2024 = [
    {
      name: "Sita Kumari",
      position: "Vice President",
      imageUrl: "https://example.com/sita.jpg",
      contactUrl: "mailto:sita@example.com",
      siteUrl: "https://www.sita.com",
      facebookUrl: "https://www.facebook.com/sita",
      twitterUrl: "https://twitter.com/sita",
      linkedinUrl: "https://www.linkedin.com/in/sita",
      githubUrl: "https://github.com/sita",
    },
    // Other 2024 team members...
  ];

  // Function to handle year change
  const handleYearChange = (year) => {
    setTeamYear(year);
  };

  return (
    <div className="contents">
      <div
        ref={(ref) => handleRef(ref, 0)}
        onMouseEnter={() => handleHighlight(0)}
        className="section"
      >
        <div className="heading">{headings[0]}</div>
        <p>
          CSITAN is an autonomous, non-profitable, nongovernmental,
          non-political, service oriented social organization established by the
          young energetic BSc CSIT students in 2011 to act as a bridge between
          the faculty, students and IT industries in Nepal. The organization is
          currently expanded to around 10000 students from 60+ colleges all over
          the nation. Apart from the central committee in Kathmandu, we also
          have our regional committees in five other regions: Chitwan, Butwal,
          Rupandehi, Pokhara and Purwanchal.
          <br />
          <br />
          We have been working to extend our regional committees to other parts
          of the country as well. CSITAN has been actively involved in various
          activities from the past eight years to bridge the gaps between
          university, industry and the students. Besides this, we have been
          organizing workshops and seminars for students to improve their
          knowledge about different aspects of computer science and information
          technology. CSITAN is believed to have the prodigious potential to
          evolve. We aspire to be an organization that will be an integral part
          of every IT College and student, leading and motivating them to
          excellence. We have been conducting several IT Seminars, exhibitions
          and counselling programs in different IT colleges throughout the year.
          We ensure to organize at least one program each month endeavoring to
          match our motto: “Calibrating Technical Potentials”. We have
          successfully organized various programs in the past.
        </p>
      </div>

      <div
        ref={(ref) => handleRef(ref, 1)}
        onMouseEnter={() => handleHighlight(1)}
        className="section inversion"
      >
        <div className="heading">{headings[1]}</div>
        <p>
          CSITAN is goaded with a mission to promote the CSIT sector and empower
          tech professionals for the betterment of the country.
        </p>
        <ul className="horizontal">
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <GrConnect />
                </div>
              </div>
              <div className="missionTitle">
                CONNECT STUDENTS, INDUSTRY, AND FACULTY
              </div>
            </div>
          </li>
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <PiFlowerLotusFill />
                </div>
              </div>
              <div className="missionTitle">EMPOWER AND EDUCATE STUDENTS</div>
            </div>
          </li>
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <GiLifeSupport />
                </div>
              </div>
              <div className="missionTitle">SUPPORT DESERVING ONES</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="toggle-options">
        <select
          className="year-select"
          onChange={(e) => handleYearChange(parseInt(e.target.value))}
        >
          <option value={2023}>2023 Team</option>
          <option value={2024}>2024 Team</option>
        </select>
      </div>
      <div
        ref={(ref) => handleRef(ref, 2)}
        onMouseEnter={() => handleHighlight(2)}
        className="section"
      >
        <div className="heading">{headings[2]}</div>
        <p>Synergy in Motion: Elevating Together, Winning Forever!</p>

        <TeamMembers
          teamMembers={teamYear === 2023 ? teamMembersData2023 : teamMembersData2024}
          handleYearChange={handleYearChange}
        />
      </div>
    </div>
  );
};

export default Content;

function TeamMembers({ teamMembers, handleYearChange }) {
  return (
    
    <div className="team-members-container">
      
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member-section">
          <TeamMemberCard {...member} />
        </div>
      ))}

      {/* Option system */}
     
    </div>
  );
}

