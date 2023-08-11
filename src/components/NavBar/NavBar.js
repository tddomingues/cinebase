import { ContainerNav } from "./NavBar.style";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ContainerNav>
      <Link to="/">
        <h1>CINEBASE</h1>
      </Link>
      <Link to="/">Início</Link>
    </ContainerNav>
  );
};

export default NavBar;
