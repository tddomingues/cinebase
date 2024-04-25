import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

import { useDispatch, useSelector } from "react-redux";
import { getSearch, reset, currentPage } from "../../slices/searchSlice";
import Loading from "../../components/Loading/Loading";

const Search = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search).get("query");
  const { movies, loading, page } = useSelector((state) => state.searchSlice);

  console.log(query, page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSearch({ page: page, query: query }));
  }, [dispatch, page, query]);

  if (loading) return <Loading />;
  //if (movies.length === 0) return <Loading />;

  return (
    <>
      <NavBar />
      <ListSkeleton
        movies={movies}
        loading={loading}
        page={page}
        currentPage={currentPage}
        query={query}
        title={query}
      />
    </>
  );
};

export default Search;
