import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

import { useDispatch, useSelector } from "react-redux";
import { getSearch, reset, currentPage } from "../../slices/searchSlice";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

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

  return (
    <>
      <div className="content">
        <NavBar />
        <ListSkeleton
          movies={movies}
          loading={loading}
          page={page}
          currentPage={currentPage}
          query={query}
        />
      </div>
      <Footer />
    </>
  );
};

export default Search;
