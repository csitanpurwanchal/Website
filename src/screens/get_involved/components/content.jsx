import React from "react";
import "./content.css";
import { GrConnect } from "react-icons/gr";
import { GiLifeSupport } from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import CustomButton from "../../../component/button";

const Content = ({ headings, handleRef, handleHighlight }) => {

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
          Being a CSITAN General Member comes with the following perks and
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
            <a
  href="https://docs.google.com/forms/u/1/d/1oMgPA03XmL_QfDDmB2XCbjO-MVZChQgsSjZ87_n6GBE/edit?usp=forms_home&ths=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="new-classname">Join Now</button>
</a>


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
      <div className="section">
  <div className="heading">How Can I Join?</div>
  <p>
    To become a part of CSITAN and make an impact in the CSIT sector, follow these simple steps:
  </p>
  <ul className="join-steps">
    <li> Visit the <a href="https://docs.google.com/forms/u/1/d/1RpdnJI2KoZYe4fog3F7CxovgCY_RkMAwlNhZhWfnkfA/edit?usp=forms_home&ths=true" target="_blank" rel="noopener noreferrer">registration page</a>.</li>
    <li> Fill out the membership form with your personal details.</li>
    <li> Pay the membership fee (if applicable) through the available payment options.</li>
    <li> Wait for a confirmation email or message with further details.</li>
    <li> Join our events and start contributing to the CSIT community!</li>
  </ul>
  <a
  href="https://docs.google.com/forms/u/1/d/1oMgPA03XmL_QfDDmB2XCbjO-MVZChQgsSjZ87_n6GBE/edit?usp=forms_home&ths=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="new-classname">Join Now</button>
</a>

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
    </div>
  );
};

export default Content;
