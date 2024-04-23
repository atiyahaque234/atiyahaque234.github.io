import { TypeAnimation } from "react-type-animation";

const TypingName = () => {
  return (
    <TypeAnimation
      sequence={["Atiya Haque"]}
      wrapper="span"
      speed={0.005}
      style={{ className: "typingClass", display: "flex" }}
      repeat={0}
    />
  );
};
export default TypingName;
