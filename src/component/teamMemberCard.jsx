import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./teamMemberCard.css";
import CustomButton from "./button";

const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  contactUrl,
  siteUrl,
  facebookUrl,
  twitterUrl,
  linkedinUrl,
  githubUrl,
}) => {
  return (
    <div className="team-member-card">
      <div className="cardContent">
        <img src={imageUrl} alt={name} className="team-member-photo" />
        <h3>{name}</h3>
        <p>{position}</p>

        <div className="buttons-container">
          <CustomButton
            text="Contact"
            onClick={() => (window.location.href = contactUrl)}
            fontSize="20px"
          />
          <div className="textbtn">
            <CustomButton
              text="Visit Site"
              onClick={() => (window.location.href = siteUrl)}
              fontSize="20px"
            />
          </div>
        </div>

        <div className="social-icons-container">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
