import { useState, useEffect } from "react";

import { ApiKey } from "../config/key";

import { useParams } from "react-router-dom";

export const useGetMovies = () => {
  const [listMoviesPopular, setListMoviesPopular] = useState([]);
  const [listMoviesUpcoming, setListMoviesUpcoming] = useState([]);
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
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const response = await getFetch.json();
      setListMoviesPopular(response.results);
    };
    popularMovies();
  }, []);

  useEffect(() => {
    const upcomingMovies = async () => {
      const getFetch = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const response = await getFetch.json();
      setListMoviesUpcoming(response.results);
    };
    upcomingMovies();
  }, []);

  useEffect(() => {
    const popularMovieId = async () => {
      const getFetch = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      const response = await getFetch.json();
      setMovieId(response);
    };
    popularMovieId();
  }, []);

  return { listMoviesPopular, listMoviesUpcoming, movieId };
};
