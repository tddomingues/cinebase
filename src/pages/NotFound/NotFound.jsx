import React from "react";

//styles
import { Container } from "./styles";

//router
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
