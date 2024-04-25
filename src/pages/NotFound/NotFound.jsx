import React from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <p>Página não encontrada</p>
      <span>
        <Link to="/">Início</Link>
      </span>
    </Container>
  );
};

export default NotFound;
