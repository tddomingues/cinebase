import styled from "styled-components";

//tags que irão englobar o conteudo
export const Container = styled.div``;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 200px 600px 200px;
  justify-content: center;
  gap: 1em;
  padding: 0px 1em 0px 1em;
`;
//tags que irão englobar o conteudo

//section dos filmes por vir
export const SectionMovieUpcoming = styled.section`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 60px;
`;

export const MovieUpcomingTitle = styled.div`
  background-color: #000;
  width: 100%;
  height: 90px;
  padding: 10px;
  display: grid;
  place-items: center;

  & h2 {
    text-align: center;
    font-size: 20px;
    color: #f5c518;
  }
`;

export const BoxUpcoming = styled.div`
  & img {
    width: 200px;
    height: auto;
  }
`;
//section dos filmes por vir

//section dos filmes populares
export const SectionPopularMovies = styled.section`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 60px;
`;
export const PopularMovieTitle = styled.div`
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

export const ListMoviesPopular = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  background-color: #fffbff;
`;

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
//section dos filmes populares

/*Section das séries populares*/
export const SectionPopularSeries = styled.section`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 60px;
`;
export const SeriesTitle = styled.section`
  background-color: #000;
  width: 100%;
  height: 90px;
  padding: 10px;
  display: grid;
  place-items: center;

  & h2 {
    text-align: center;
    font-size: 20px;
    color: #f5c518;
  }
`;
export const BoxSeries = styled.div`
  & img {
    width: 200px;
    height: auto;
  }
`;
/*Section das séries populares*/
