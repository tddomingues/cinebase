import { Link } from "react-router-dom";

import {
  /* */
  Container,
  Main,
  /* */
  SectionMovieUpcoming,
  BoxUpcoming,
  MovieUpcomingTitle,
  /* */
  SectionPopularMovies,
  BoxMoviePopular,
  ListMoviesPopular,
  PopularMovieTitle,
  /* */
  SectionPopularSeries,
  SeriesTitle,
  BoxSeries,
} from "./Home.style";

import { useGetMovies } from "../../hooks/useGetMovies";
import { useGetSeries } from "../../hooks/useGetSeries";

const Home = () => {
  const { listMoviesPopular, listMoviesUpcoming } = useGetMovies();
  const { listSeriesPopular } = useGetSeries();

  return (
    <Container>
      <Main>
        <SectionMovieUpcoming>
          <MovieUpcomingTitle>
            <h2>FILMES POR VIR</h2>
          </MovieUpcomingTitle>

          {listMoviesUpcoming &&
            listMoviesUpcoming.map((lmu) => (
              <BoxUpcoming key={lmu.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${lmu.poster_path}`}
                  alt=""
                />
                <div></div>
              </BoxUpcoming>
            ))}
        </SectionMovieUpcoming>
        <SectionPopularMovies>
          <PopularMovieTitle>
            <h2>FILMES POPULARES</h2>
          </PopularMovieTitle>
          <ListMoviesPopular>
            {listMoviesPopular &&
              listMoviesPopular.map((lmp) => (
                <BoxMoviePopular key={lmp.id}>
                  <h3>{lmp.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${lmp.poster_path}`}
                    alt=""
                  />
                  <div>
                    <button>
                      <Link to={`/movie/${lmp.id}`}>Saiba Mais</Link>
                    </button>
                  </div>
                </BoxMoviePopular>
              ))}
          </ListMoviesPopular>
        </SectionPopularMovies>
        <SectionPopularSeries>
          <SeriesTitle>
            <h2>SÉRIES POPULARES</h2>
          </SeriesTitle>

          {listSeriesPopular &&
            listSeriesPopular.map((lsp) => (
              <BoxSeries key={lsp.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${lsp.poster_path}`}
                  alt=""
                />
                <div></div>
              </BoxSeries>
            ))}
        </SectionPopularSeries>
      </Main>
    </Container>
  );
};

export default Home;
