import styled from "styled-components"

export const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 1em 0px 1em;
`;

export const SectionSearchMovies = styled.section`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 60px;
`;
export const MovieTitle = styled.div`
  background-color: #000;
  width: 100%;
  height: 140px;
  padding: 10px;
  display: grid;
  place-items: center;

  & h2 {
    text-align: center;
    font-size: 50px;
    color: #f5c518;
  }
`;

export const ListMovies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  background-color: #fffbff;
`;

export const BoxMovie = styled.div`
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
    color: #fffbff;
  }

  & button {
    border: none;
    background-color: #f5c518;
    padding: 6px 8px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s;
  }

  & div {
    padding-top: 20px;
  }

  & a {
    color: #121212;
  }

  & button:hover {
    background-color: #fffbff;
  }
`;

export const ImgTitleMoviePopular = styled.div`
  padding: 10px;
  border: 10px solid #fff;

  & p {
    color: #fffbff;
    font-size: 20px;
    background-color: #000;
    width: 150px;
    text-align: center;
    padding: 5px;
  }
`;