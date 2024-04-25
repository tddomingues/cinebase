import { Link } from "react-router-dom";

import { FooterStyles } from "./styles";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
  return (
    <FooterStyles>
      <span>
        <Link to="/">
          <DiGithubFull />
        </Link>
      </span>
    </FooterStyles>
  );
};

export default Footer;
