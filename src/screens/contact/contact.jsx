import "./contact.css";
import { FaEnvelope, FaMapMarker } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import CustomButton from "../../component/button";

const Contact = () => {
  return (
    <div className="contentContact">
      <div className="pageheading">
        <div className="content">Contact Us</div>
      </div>
      <div className="content">
        <div className="internalSections">
          <div className="leftSide">
            <h2>Contact Details</h2>
            <p>The fastest way to contact us is to call us directly.</p>
            <div className="row">
              <FaSquarePhone className="icon" size={45} />
              <div className="column">
                <div className="type">PHONE</div>
                <p>+977-9817959559 / +977-9812573985</p>
              </div>
            </div>
            <div className="row">
              <FaEnvelope className="icon" size={45} />
              <div className="column">
                <div className="type">EMAIL</div>
                <p>mail@csitanpurwanchal.com</p>
              </div>
            </div>
            <div className="row">
              <FaMapMarker className="icon" size={45} />
              <div className="column">
                <div className="type">ADDRESS</div>
                <p>Biratnager, Morang, Nepal</p>
              </div>
            </div>
          </div>
          <div className="rightField">
            <div className="column">
              <div className="row">
                <input
                  type="text"
                  placeholder="Name"
                  className="inputField one"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="inputField two"
                />
              </div>
              <textarea
                rows="13"
                placeholder="Message"
                className="textArea"
              ></textarea>

              <div className="contactButton">
                <CustomButton text="SEND NOW" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
