import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiKey } from "../config/key";

export const useQuery = () => {
  const [search] = useSearchParams();
  const query = search.get("q");
  const [listSearch, setListSearch] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  useEffect(() => {
    const getSearch = async () => {
      const getFetch = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}`,
        options
      );
      const response = await getFetch.json();
      setListSearch(response.results);
    };
    getSearch();
  }, [query]);

  return { listSearch, query };
};
