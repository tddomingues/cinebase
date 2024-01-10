import styled from "styled-components";

export const BoxMoviePopular = styled.div`
  background-color: #121212;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h3 {
    font-size: 30px;
    color: #fffbff;
    padding-bottom: 5px;
    border-bottom: 1px solid #fffbff;
    width: 100%;
    text-align: center;
  }

  & img {
    width: 300px;
    padding-top: 10px;
  }

  & button {
    margin-top: 20px;
    background-color: #f5c518;
    padding: 6px 8px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.4s;
  }

  & button:hover {
    background-color: #fffbff;
  }

  & a {
    color: #121212;
  }
`;