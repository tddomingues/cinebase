import { useState, useEffect } from "react";

import {useParams} from "react-router-dom"

import { ApiKey } from "../config/key";

export const useGetSeries = () => {
  const [listSeriesPopular, setListSeriesPopular] = useState([]);
  const [serieId, setSerieId] = useState([])
  const [loadingSerie, setLoading] = useState(null)
  const {id} = useParams()

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  useEffect(() => {
    const popularSeries = async () => {
      setLoading(true)
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        options
      );
      const response = await getFetch.json();
      setListSeriesPopular(response.results);
      setLoading(false)
    };
    popularSeries();
  }, []);

  useEffect(() => {
    const popularSerieId = async () => {
      if(id) {
        setLoading(true)
        const getFetch = await fetch(
          `https://api.themoviedb.org/3/tv/${id}`,
          options
        );
        const response = await getFetch.json();
        setSerieId(response);
        setLoading(false)
      } 
      
    };
    popularSerieId();
  }, [id]);

  return { listSeriesPopular, serieId, loadingSerie };
};
