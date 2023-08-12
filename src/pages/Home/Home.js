import { Link } from "react-router-dom";

import {
  /* */
  Main,
  /* */
  SectionMovieSerie,
  MovieSerieTitle,
  Box,
  ListResponsive,
  /* */
  SectionPopularMovies,
  BoxMoviePopular,
  ListMoviesPopular,
  PopularMovieTitle,
} from "./Home.style";

import {Loading} from "../../GlobalStyle"

import { BiLoaderAlt } from 'react-icons/bi';

import { useGetMovies } from "../../hooks/useGetMovies";
import { useGetSeries } from "../../hooks/useGetSeries";

const Home = () => {
  const { listMoviesPopular, listMoviesUpcoming, loadingMovie } = useGetMovies();
  const { listSeriesPopular, loadingSerie } = useGetSeries();

  return (
    <Main>
      {loadingMovie && loadingSerie && <Loading><BiLoaderAlt/></Loading>}
      <SectionMovieSerie>
        <MovieSerieTitle>
          <h2>FILMES POR VIR</h2>
        </MovieSerieTitle>
        <ListResponsive>
          {!loadingMovie && listMoviesUpcoming &&
            listMoviesUpcoming.map((lmu) => (
              <Box key={lmu.id}>
                <Link to={`/movie/${lmu.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${lmu.poster_path}`}
                    alt=""
                  />
                </Link>
              </Box>
            ))}
        </ListResponsive>
      </SectionMovieSerie>

      <SectionPopularMovies>
        <PopularMovieTitle>
          <h2>FILMES POPULARES</h2>
        </PopularMovieTitle>
        <ListMoviesPopular>
          {!loadingMovie && listMoviesPopular &&
            listMoviesPopular.map((lmp) => (
              <BoxMoviePopular key={lmp.id}>
                <h3>{lmp.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${lmp.poster_path}`}
                  alt=""
                />
                <button>
                  <Link to={`/movie/${lmp.id}`}>Saiba Mais</Link>
                </button>
              </BoxMoviePopular>
            ))}
        </ListMoviesPopular>
      </SectionPopularMovies>

      <SectionMovieSerie>
        <MovieSerieTitle>
          <h2>SÉRIES POPULARES</h2>
        </MovieSerieTitle>
        <ListResponsive>
          {!loadingSerie && listSeriesPopular &&
            listSeriesPopular.map((lsp) => (
              <Box key={lsp.id}>
                <Link to={`/serie/${lsp.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${lsp.poster_path}`}
                    alt=""
                  />
                </Link>
              </Box>
            ))}
        </ListResponsive>
      </SectionMovieSerie>
    </Main>
  );
};

export default Home;
