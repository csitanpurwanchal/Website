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
      name: "Rachit Chettri",
      position: "Joint Secratary",
      imageUrl: "https://scontent.fbir1-1.fna.fbcdn.net/v/t51.75761-15/465090833_17923954178981593_2896580449249841563_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=syq14iff07wQ7kNvgGWZKMs&_nc_oc=AdjVjmGyqg3eibT2TT6guG7LG1DQyyDUAylT3PZWVGhVPdIh-rw2i37sq2XUoklWBPiPiAuMnPHB2h-zglfsqqTn&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ABCGIzdkcaxNG2QsaFT0Jfg&oh=00_AYCSQM01Gv7GHUfGQeAucOakMzYJy6Qv-zweTW5Rnj3C6A&oe=6790F900",
      contactUrl: "9867992785",
      siteUrl: "",
      facebookUrl: "https://www.facebook.com/rachitchettri1",
      twitterUrl: "https://x.com/rachitchettri22",
      linkedinUrl: "https://np.linkedin.com/in/rachit-chettri-68b027341",
      githubUrl: "https://github.com/rachitchettri",
    },
    {
      name: "Dipesh Pokhrel",
      position: "President",
      imageUrl: "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-1/319341893_1614601158996480_2639716086395821294_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1IQossx3jr4Q7kNvgG8M1TR&_nc_oc=AdgWfAYNuu6lj_WiOrd5f_u27cUeb-2AHm_GT5JzxM5sD_2j0Mu3Vma9CIkhEHP2XdRabihznsYs5t2yUA7021-9&_nc_zt=24&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A0cKsp9HJaHT3_yRGoBN_u4&oh=00_AYAQVO8yDLqPbXf3YiiuxWR2em39AmAvyiR6K1slXhUosw&oe=678FED7D",
      contactUrl: "9867992785",
      siteUrl: "",
      facebookUrl: "https://www.facebook.com/dipesh.pokhrel.923?mibextid=ZbWKwL",
      twitterUrl: "https://x.com/p_dipesh3?t=MiTfgv-jtmXRfZWCmIVccQ&s=09",
      linkedinUrl: "https://www.linkedin.com/in/dipesh-pokhrel-44a1601b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      githubUrl: "https://github.com/Dipesh65",
    },
    {
      name: "Suyash Dhakal",
      position: "Executive Member",
      imageUrl: "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/472965268_2865205776991122_6324572912874019110_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=brqpJcDZHVYQ7kNvgG1eCSr&_nc_oc=AdiV5Dad6V2dr3Wc-BvBMLhwDmKzYNDPwYO8q3aXMDRGVPU4cZbbalYV6Za_r6UdG2nc6Ei2qQ02fUXupWiTsP0q&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AacqdGdojBUCUH-mQ75D86I&oh=00_AYB-kjyRcAryEhDNflQphmGulDqQH0Oz7nxtdLToTTgSZg&oe=67911828",
      contactUrl: "mailto:john@example.com",
      siteUrl: "www.dhakalsuyash.com.np",
      facebookUrl: "https://www.facebook.com/suyash.dhakal.3",
      twitterUrl: "https://x.com/Suyash_D1",
      linkedinUrl: "https://np.linkedin.com/in/suyash-dhakal",
      githubUrl: "github.com/Suyash-Dhakal",
    },
    {
      name: "Shreya khatiwada",
      position: "Executive Member",
      imageUrl: "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-1/461976763_1240074503799451_21133838218514051_n.jpg?stp=c0.0.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=fP1vPAKA5z8Q7kNvgHrry_I&_nc_oc=Adjq4kikzNJKb869JGLvNQLbW5sa7PadFRbq-kfzGf7__ISCnunANvQo02DGk689cg_uBYOvOA4jrTGQs4nmNPM4&_nc_zt=24&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A6O4GBC9GXRjyn8YuBcFAj6&oh=00_AYBM3n4kl7_jb1TNNnH6tdGrlx8xqnb-qzlk9qoam9E25w&oe=67910882",
      contactUrl: "mailto:john@example.com",
      siteUrl: "www.dhakalsuyash.com.np",
      facebookUrl: "https://www.facebook.com/share/15V4ztZGcP/?mibextid=wwXIfr",
      twitterUrl: "https://x.com/Suyash_D1",
      linkedinUrl: "https://www.linkedin.com/in/shreya-khatiwada-9084b4283?trk=contact-info",
      githubUrl: "github.com/Suyash-Dhakal",
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

