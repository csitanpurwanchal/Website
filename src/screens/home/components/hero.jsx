import CustomButton from "../../../component/button";
import Carousel from "../../../component/carousel";
import TextButton from "../../../component/textButton";
import WaveAnimation from "../../../component/waveAnimation";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero parent-component">
        <div className="content">
          <div className="left">
            <div className="heading">
              For the students by the students, Aiming empowerment of CSIT.
            </div>
            <div className="subheading">
              CSIT Association Nepal - Purwanchal
            </div>
            <div className="buttonsRow">
              <CustomButton onClick={console.log("")} text={"CONTACT"} />
              <TextButton />
            </div>
          </div>
          <div className="right">
            <Carousel />
          </div>
        </div>
        <div className="wave">
          <WaveAnimation />
        </div>

        <ul class="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
export default Hero;
