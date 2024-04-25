import { Link } from "react-router-dom";

import { FooterStyles } from "./styles";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyles>
      <p>Desenvolvido por Tiago Domingues</p>
      <span
        onClick={() =>
          (window.location.href = "https://www.linkedin.com/in/tiago3domingues")
        }
      >
        <FaLinkedinIn />
      </span>
    </FooterStyles>
  );
};

export default Footer;