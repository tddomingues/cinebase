import { Link } from "react-router-dom";

import { SectionSearch, Title, List, Box, Main } from "./Search.style";

import { useQuery } from "../../hooks/useQuery";

import { Loading } from "../../GlobalStyle";

import { BiLoaderAlt } from "react-icons/bi";

const Search = () => {
  const { listSearch, query, loadingSearch } = useQuery();

  return (
    <Main>
      {loadingSearch && (
        <Loading>
          <BiLoaderAlt />
        </Loading>
      )}
      {!loadingSearch && (
        <SectionSearch>
          <Title>
            <h2>Pesquisa: {query}</h2>
          </Title>
          <List>
            {listSearch &&
              listSearch.map((ls) => (
                <Box key={ls.id}>
                  <h3>{ls.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${ls.poster_path}`}
                    alt={ls.title}
                  />
                  <button>
                    {ls.media_type === "movie" ? (
                      <Link to={`/movie/${ls.id}`}>Saiba Mais</Link>
                    ) : (
                      <Link to={`/serie/${ls.id}`}>Saiba Mais</Link>
                    )}
                  </button>
                </Box>
              ))}
          </List>
        </SectionSearch>
      )}
    </Main>
  );
};

export default Search;
