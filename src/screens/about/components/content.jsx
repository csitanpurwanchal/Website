// Content component
import React from "react";
import "./content.css";
import { GrConnect } from "react-icons/gr";
import { GiLifeSupport } from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import TeamMemberCard from "../../../component/teamMemberCard";
const Content = ({ headings, handleRef, handleHighlight }) => {
  const teamMembersData = [
    {
      name: "Pukar Bajgain",
      position: "President",
      imageUrl:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/252769449_4473667032670877_8490505483187830605_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hK8MUDsdkcEAX-QoqZv&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAOY4KJoQoUYT7NIXCTYU9z9inWfP-M5kbHTVfQqoCfCA&oe=65A9C03A",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Bishwa Kiran Poudel",
      position: "Vice-President",
      imageUrl:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/252769449_4473667032670877_8490505483187830605_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hK8MUDsdkcEAX-QoqZv&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAOY4KJoQoUYT7NIXCTYU9z9inWfP-M5kbHTVfQqoCfCA&oe=65A9C03A",
      contactUrl: "mailto:jane@example.com",
      siteUrl: "https://www.janesmith.com",
      facebookUrl: "https://www.facebook.com/janesmith",
      twitterUrl: "https://twitter.com/janesmith",
      linkedinUrl: "https://www.linkedin.com/in/janesmith",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "John Doe",
      position: "Software Developer",
      imageUrl:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/252769449_4473667032670877_8490505483187830605_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hK8MUDsdkcEAX-QoqZv&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAOY4KJoQoUYT7NIXCTYU9z9inWfP-M5kbHTVfQqoCfCA&oe=65A9C03A",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      imageUrl: "https://example.com/janesmith.jpg",
      contactUrl: "mailto:jane@example.com",
      siteUrl: "https://www.janesmith.com",
      facebookUrl: "https://www.facebook.com/janesmith",
      twitterUrl: "https://twitter.com/janesmith",
      linkedinUrl: "https://www.linkedin.com/in/janesmith",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "John Doe",
      position: "Software Developer",
      imageUrl: "https://example.com/johndoe.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      imageUrl: "https://example.com/janesmith.jpg",
      contactUrl: "mailto:jane@example.com",
      siteUrl: "https://www.janesmith.com",
      facebookUrl: "https://www.facebook.com/janesmith",
      twitterUrl: "https://twitter.com/janesmith",
      linkedinUrl: "https://www.linkedin.com/in/janesmith",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "John Doe",
      position: "Software Developer",
      imageUrl: "https://example.com/johndoe.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      imageUrl: "https://example.com/janesmith.jpg",
      contactUrl: "mailto:jane@example.com",
      siteUrl: "https://www.janesmith.com",
      facebookUrl: "https://www.facebook.com/janesmith",
      twitterUrl: "https://twitter.com/janesmith",
      linkedinUrl: "https://www.linkedin.com/in/janesmith",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "John Doe",
      position: "Software Developer",
      imageUrl: "https://example.com/johndoe.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      imageUrl: "https://example.com/janesmith.jpg",
      contactUrl: "mailto:jane@example.com",
      siteUrl: "https://www.janesmith.com",
      facebookUrl: "https://www.facebook.com/janesmith",
      twitterUrl: "https://twitter.com/janesmith",
      linkedinUrl: "https://www.linkedin.com/in/janesmith",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "John Doe",
      position: "Software Developer",
      imageUrl: "https://example.com/johndoe.jpg",
      contactUrl: "mailto:john@example.com",
      siteUrl: "https://www.johndoe.com",
      facebookUrl: "https://www.facebook.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
      linkedinUrl: "https://www.linkedin.com/in/johndoe",
      githubUrl: "https://github.com/johndoe",
    },

    // Add more team members as needed
    // ...
  ];

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
          CSITAN is goaded with a mission to promote CSIT sector and empower
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
                CONNECT STUDENTS INDUSTRY AND FACULTY
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

      <div
        ref={(ref) => handleRef(ref, 2)}
        onMouseEnter={() => handleHighlight(2)}
        className="section"
      >
        <div className="heading">{headings[2]}</div>
        <p>Synergy in Motion: Elevating Together, Winning Forever!</p>

        <TeamMembers teamMembers={teamMembersData} />
      </div>
    </div>
  );
};

export default Content;

function TeamMembers({ teamMembers }) {
  const renderTeamMembers = () => {
    try {
      return teamMembers.map((member, index) => {
        const element = (
          <div
            key={index} // Adjust the starting index accordingly
            className="team-member-section"
          >
            <TeamMemberCard {...member} />
          </div>
        );

        // Logging the element to help identify issues
        console.log("Rendered element:", element);

        return element;
      });
    } catch (error) {
      console.error("Error in renderTeamMembers:", error);
    }
  };

  return <div className="team-members-container">{renderTeamMembers()}</div>;
}
