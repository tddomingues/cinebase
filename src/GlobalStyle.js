import { createGlobalStyle, styled } from "styled-components";

/*
Cores usadas no projeto:
preto escuro: #000
preto claro: #121212
amarelo: #F5C518
branco: #fffbff
*/

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

a {
    text-decoration: none;
}

ol,
ul {
    list-style: none;
}

button {
    border: none;
    cursor: pointer;
}
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11111;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  font-size: 120px;
  color: #2790b0;
  display: grid;
  place-items: center;
  animation: loadingRotation 1s linear infinite;

  @keyframes loadingRotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
