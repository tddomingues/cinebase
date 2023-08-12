import { useState, useEffect } from "react";

import { ApiKey } from "../config/key";

import { useParams } from "react-router-dom";

export const useGetMovies = () => {
  const [listMoviesPopular, setListMoviesPopular] = useState([]);
  const [listMoviesUpcoming, setListMoviesUpcoming] = useState([]);
  const [loadingMovie, setLoading] = useState(null)
  const [movieId, setMovieId] = useState([]);
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  useEffect(() => {
    const popularMovies = async () => {
      setLoading(true)
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const response = await getFetch.json();
      setListMoviesPopular(response.results);
      setLoading(false)
    };
    popularMovies();
  }, []);

  useEffect(() => {
    const upcomingMovies = async () => {
      setLoading(true)
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const response = await getFetch.json();
      setListMoviesUpcoming(response.results);
      setLoading(false)
    };
    upcomingMovies();
  }, []);

  useEffect(() => {
    const popularMovieId = async () => {
      if (id) {
        setLoading(true)
        const getFetch = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );
        const response = await getFetch.json();
        setMovieId(response);
        setLoading(false)
      }
    };
    popularMovieId();
  }, [id]);

  return { listMoviesPopular, listMoviesUpcoming, movieId, loadingMovie };
};
