import { Link } from "react-router-dom";

import {
  SectionSearchMovies,
  MovieTitle,
  ListMovies,
  BoxMovie,
  Main,
} from "./Search.style";

import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const { listSearch, query } = useQuery();

  return (
    <Main>
      <SectionSearchMovies>
        <MovieTitle>
          <h2>Pesquisa: {query}</h2>
        </MovieTitle>
        <ListMovies>
          {listSearch &&
            listSearch.map((ls) => (
              <BoxMovie key={ls.id}>
                <h3>{ls.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${ls.poster_path}`}
                  alt={ls.title}
                />
                <div>
                  <button>
                    {ls.media_type === "movie" ? (
                      <Link to={`/movie/${ls.id}`}>Saiba Mais</Link>
                    ) : (
                      <Link to={`/serie/${ls.id}`}>Saiba Mais</Link>
                    )}
                  </button>
                </div>
              </BoxMovie>
            ))}
        </ListMovies>
      </SectionSearchMovies>
    </Main>
  );
};

export default Search;
