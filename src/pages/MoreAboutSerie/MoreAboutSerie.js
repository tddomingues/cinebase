import { AiFillStar } from "react-icons/ai";

import {
  Main,
  SectionMoreAbout,
  BoxMoreAbout,
  InfoBasic,
  Synopsis,
} from "../MoreAboutMovie/MoreAboutMovie.style";

import { useGetSeries } from "../../hooks/useGetSeries";

import { Loading } from "../../GlobalStyle";

import { BiLoaderAlt } from "react-icons/bi";

const MoreAboutSerie = () => {
  const { serieId, loadingSerie } = useGetSeries();

  return (
    <Main>
      {loadingSerie && (
        <Loading>
          <BiLoaderAlt />
        </Loading>
      )}
      {!loadingSerie && (
        <SectionMoreAbout>
          <h2>{serieId.name}</h2>
          <BoxMoreAbout>
            <InfoBasic>
              <p>
                <AiFillStar style={{ color: "#F5C518" }} />{" "}
                {serieId.vote_average}
              </p>
              <p>Lançamento: {serieId.first_air_date}</p>
              <p>Idioma: {serieId.original_language}</p>
            </InfoBasic>
            <img
              src={`https://image.tmdb.org/t/p/w500/${serieId.poster_path}`}
              alt={serieId.name}
            />
            <Synopsis>
              <h4>SINOPSE</h4>
              <p>{serieId.overview}</p>
            </Synopsis>
          </BoxMoreAbout>
        </SectionMoreAbout>
      )}
    </Main>
  );
};

export default MoreAboutSerie;
