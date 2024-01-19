import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaEnvelope, FaMapMarker } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import CustomButton from "../../component/button";


const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message){
      console.log("Please fill out all fields");
      return;
    }

    emailjs 
    .sendForm(
      "service_8zu1nbn",
      "template_er5zvgx",
      form.current,
      "qh4XGHeUiKvMo4ARc"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");

        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
 
  return (
    <div className="contentContact">
      <div className="pageheading">
        <div className="content">Contact Us</div>
      </div>
      <div className="content">
        <div className="internalSections">
          <div className="leftSide">
            <h2>Contact Details</h2>
            <div className="blob"></div>
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
          <form ref={form} onSubmit={sendEmail}>
          <div className="rightField">
            <div className="column">
              <div className="row">
                <input
                  type="text"
                  placeholder="Name"
                  className="inputField one" 
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="inputField two" 
                  name="reply_to"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                rows="13"
                placeholder="Message"
                className="textArea"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="contactButton">
                <CustomButton text="SEND NOW" type="submit" width="100%" />
              </div>
            
            </div>
          </div>
          </form>
        </div>
      </div>
      
      
    </div>
    
  );
};

export default Contact;
