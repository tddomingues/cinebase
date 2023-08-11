import { AiFillStar } from "react-icons/ai";

import { useGetMovies } from "../../hooks/useGetMovies";

import {
  Container,
  Main,
  SectionMoreAbout,
  BoxImgMoreAbout,
  BoxDescription,
} from "./MoreAboutMovie.style";

const MoreAboutMovie = () => {
  const { movieId } = useGetMovies();

  return (
    <Container>
      <Main>
        <SectionMoreAbout>
          <h2>{movieId.title}</h2>

          <BoxImgMoreAbout>
            <div className="infoBasic">
              <p>
                <AiFillStar style={{ color: "#F5C518" }} />{" "}
                {movieId.vote_average}
              </p>
              <p>Lançamento: {movieId.release_date}</p>
              <p>Idioma: {movieId.original_language}</p>
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500/${movieId.poster_path}`}
              alt=""
            />
            <div className="synopsis">
              <h4>SINOPSE</h4>
              <p>{movieId.overview}</p>
            </div>
          </BoxImgMoreAbout>

          <BoxDescription></BoxDescription>
        </SectionMoreAbout>
      </Main>
    </Container>
  );
};

export default MoreAboutMovie;
