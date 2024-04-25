import { Link } from "react-router-dom";

import { FooterStyles } from "./styles";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
  return (
    <FooterStyles>
      <span
        onClick={() =>
          (window.location.href = "https://www.linkedin.com/in/tiago3domingues")
        }
      >
        <DiGithubFull />
      </span>
    </FooterStyles>
  );
};

export default Footer;
