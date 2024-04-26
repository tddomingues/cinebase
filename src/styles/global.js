import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.slate950};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.slate50};
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .content { 
    flex: 1;
  }

  .error {
    margin: 1rem 4rem;
    
    > p {
      margin-bottom: 1rem;
    }

    > button {
      border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.125rem;
        background-color: ${({ theme }) => theme.colors.slate50};
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.5s ease;    
    }
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }
`;
