import { AiFillStar } from "react-icons/ai";

import { useGetMovies } from "../../hooks/useGetMovies";

import {
  Main,
  SectionMoreAbout,
  BoxMoreAbout,
  Synopsis,
  InfoBasic,
} from "./MoreAboutMovie.style";

import { Loading } from "../../GlobalStyle";

import { BiLoaderAlt } from "react-icons/bi";

const MoreAboutMovie = () => {
  const { movieId, loadingMovie } = useGetMovies();

  return (
    <Main>
      {loadingMovie && (
        <Loading>
          <BiLoaderAlt />
        </Loading>
      )}
      {!loadingMovie && (
        <SectionMoreAbout>
          <h2>{movieId.title}</h2>
          <BoxMoreAbout>
            <InfoBasic>
              <p>
                <AiFillStar style={{ color: "#F5C518" }} />{" "}
                {movieId.vote_average}
              </p>
              <p>Lançamento: {movieId.release_date}</p>
              <p>Idioma: {movieId.original_language}</p>
            </InfoBasic>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieId.poster_path}`}
              alt=""
            />
            <Synopsis>
              <h4>SINOPSE</h4>
              <p>{movieId.overview}</p>
            </Synopsis>
          </BoxMoreAbout>
        </SectionMoreAbout>
      )}
    </Main>
  );
};

export default MoreAboutMovie;
