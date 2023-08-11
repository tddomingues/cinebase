import { AiFillStar } from "react-icons/ai";

import {
  Container,
  Main,
  SectionMoreAbout,
  BoxImgMoreAbout,
  BoxDescription,
} from "./MoreAboutSerie.style";

import { useGetSeries } from "../../hooks/useGetSeries";

const MoreAboutSerie = () => {
  const { serieId } = useGetSeries();

  return (
    <Container>
      <Main>
        <SectionMoreAbout>
          <h2>{serieId.name}</h2>
          <BoxImgMoreAbout>
            <div className="infoBasic">
              <p>
                <AiFillStar style={{ color: "#F5C518" }} />{" "}
                {serieId.vote_average}
              </p>
              <p>Lançamento: {serieId.first_air_date}</p>
              <p>Idioma: {serieId.original_language}</p>
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500/${serieId.poster_path}`}
              alt={serieId.name}
            />
            <div className="synopsis">
              <h4>SINOPSE</h4>
              <p>{serieId.overview}</p>
            </div>
          </BoxImgMoreAbout>

          <BoxDescription></BoxDescription>
        </SectionMoreAbout>
      </Main>
    </Container>
  );
};

export default MoreAboutSerie;
