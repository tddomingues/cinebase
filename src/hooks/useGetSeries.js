import { useState, useEffect } from "react";

import { ApiKey } from "../config/key";

export const useGetSeries = () => {
  const [listSeriesPopular, setListSeriesPopular] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  useEffect(() => {
    const popularMovies = async () => {
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        options
      );
      const response = await getFetch.json();
      setListSeriesPopular(response.results);
    };
    popularMovies();
  }, []);

  return { listSeriesPopular, options };
};
