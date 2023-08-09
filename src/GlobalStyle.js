import { createGlobalStyle } from "styled-components";

/*
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
`;
