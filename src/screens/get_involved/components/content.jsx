// Content component
import React from "react";
import "./content.css";
import { GrConnect } from "react-icons/gr";
import { GiLifeSupport } from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import TeamMemberCard from "../../../component/teamMemberCard";
import CustomButton from "../../../component/button";
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
          Are you a BSc. CSIT student seeking an opportunity to engage with a
          vibrant community, enhance your skills, and make a lasting impact in
          the field of Information Technology? Look no further! CSIT Association
          of Nepal - Purwanchal warmly invites you to become a part of our
          General Membership.
          <br />
          <br />
          <div className="subtitle">Why Join Us?</div>
          <br />
          <span className="joinreasons">Community Engagement:</span>
          <br />
          Immerse yourself in a dynamic community dedicated to the advancement
          of knowledge and collaboration in the realm of CSIT.
          <br />
          <br />
          <span className="joinreasons">Volunteer Opportunities:</span>
          <br />
          Contribute to your personal and professional growth by actively
          participating in IT workshops and training sessions.
          <br />
          <br />
          <span className="joinreasons">Networking:</span>
          <br />
          Build valuable connections with like-minded peers and gain insights
          from industry experts in the IT field.
          <br />
          <br />
          <span className="joinreasons"> Exclusive Benefits:</span>
          <br />
          Enjoy special perks and discounts on events organized by the CSIT
          Association, enhancing your overall college experience.
        </p>
      </div>
      <div className="section inversion">
        <div className="subtitle2">Membership Benefits</div>
        <p>
          Being a CSITAN Genral Member comes with the following perks and
          benefits.
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
                Entry into CSITAN Internal Clubs
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
              <div className="missionTitle">
                Opportunity to become an executive member
              </div>
            </div>
          </li>
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <GiLifeSupport />
                </div>
              </div>
              <div className="missionTitle">
                Special discounts for CSITAN events
              </div>
            </div>
          </li>
        </ul>
        <ul className="horizontal">
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <GrConnect />
                </div>
              </div>

              <div className="missionTitle">
                Networking with IT professionals, experts, and fellow students
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
              <div className="missionTitle">
                Sponsorship opportunities from CSITAN for hackathons and other
                competitions
              </div>
            </div>
          </li>
          <li>
            <div className="missionCard">
              <div className="iconrow">
                <div className="icon">
                  <GiLifeSupport />
                </div>
              </div>
              <div className="missionTitle">
                Showcase your involvement in association activities
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="subtitle">How you can join ?</div>
        <div className="horizonatal">
          <div className="left">
            <img src="" alt="" srcset="" />
          </div>
          <div className="right">
            <p>
              CSIT Association of Nepal - Purwanchal eagerly awaits the addition
              of passionate and energetic individuals like yourself to our
              family. Your participation will not only enrich your academic
              journey but also contribute to the vibrant community we are
              building.
              <br />
              We are currently accepting registrations for General Membership.
              Keep an eye on our updates for the opening of the registration
              form in the near future.
            </p>
            <CustomButton text="JOIN NOW" />
          </div>
        </div>
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
      </div>

      <div
        ref={(ref) => handleRef(ref, 1)}
        onMouseEnter={() => handleHighlight(1)}
        className="section inversion"
      >
        <div className="heading">{headings[3]}</div>
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
    </div>
  );
};

export default Content;
