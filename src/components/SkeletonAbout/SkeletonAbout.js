import {
    Main,
    SectionMoreAbout,
    BoxMoreAbout,
    Synopsis,
    InfoBasic,
  } from "./SkeletonAbout.style.js";

import { Loading } from "../../GlobalStyle.js";

import { useGetMovies } from "../../hooks/useGetMovies.js";

import { BiLoaderAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const SkeletonAbout = ({type}) => {
    const { loadingMovie } = useGetMovies();
    return (
        <Main>
          {loadingMovie && (
            <Loading>
              <BiLoaderAlt />
            </Loading>
          )}
          {!loadingMovie && (
            <SectionMoreAbout>
              <h2>{type.title}</h2>
              <BoxMoreAbout>
                <InfoBasic>
                  <p>
                    <AiFillStar style={{ color: "#F5C518" }} />{" "}
                    {type.vote_average}
                  </p>
                  <p>Lançamento: {type.release_date}</p>
                  <p>Idioma: {type.original_language}</p>
                </InfoBasic>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${type.poster_path}`}
                  alt=""
                />
                <Synopsis>
                  <h4>SINOPSE</h4>
                  <p>{type.overview}</p>
                </Synopsis>
              </BoxMoreAbout>
            </SectionMoreAbout>
          )}
        </Main>
      );
}

export default SkeletonAbout
