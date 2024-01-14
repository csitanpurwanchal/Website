import { IoArrowForwardCircleOutline } from "react-icons/io5";

const TextButton = ({
  text = "Know More",
  onClick,
  color = "ce4444",
  fontSize = 20,
}) => {
  const buttonStyle = {
    color: `#${color}`,
    fontSize: fontSize,
    padding: "10px",
  };
  const iconStyle = {
    padding: "2px",
  };

  return (
    <>
      <div className="textButton" style={buttonStyle}>
        {text}
        <span style={iconStyle}>
          <IoArrowForwardCircleOutline size={15} />
        </span>
      </div>
    </>
  );
};

export default TextButton;
