import {
  Main,
  SectionMovieSerie,
  MovieSerieTitle,
  ListResponsive,
  SectionPopularMovies,
  ListMoviesPopular,
  PopularMovieTitle,
} from"./Home.style";

import {Loading} from "../../GlobalStyle"

import { BiLoaderAlt } from 'react-icons/bi';

import { useGetMovies } from "../../hooks/useGetMovies";
import { useGetSeries } from "../../hooks/useGetSeries";
import SkeletonAside from "../../components/SkeletonAside/SkeletonAside";
import MainCardSkeleton from "../../components/MainCardSkeleton/MainCardSkeleton";

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
              <SkeletonAside type={lmu}/>
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
              <MainCardSkeleton type={lmp}/>
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
              <SkeletonAside type={lsp}/>
            ))}
        </ListResponsive>
      </SectionMovieSerie>
    </Main>
  );
};

export default Home;
