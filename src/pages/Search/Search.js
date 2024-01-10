import { Link } from "react-router-dom";

import { SectionSearch, Title, List, Main } from "./Search.style";

import { useQuery } from "../../hooks/useQuery";

import { Loading } from "../../GlobalStyle";

import { BiLoaderAlt } from "react-icons/bi";
import MainCardSkeleton from "../../components/MainCardSkeleton/MainCardSkeleton";

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
                <MainCardSkeleton type={ls}/>
              ))}
          </List>
        </SectionSearch>
      )}
    </Main>
  );
};

export default Search;
