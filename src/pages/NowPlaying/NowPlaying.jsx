import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying, currentPage } from "../../slices/nowPlayingSlice";
import Loading from "../../components/Loading/Loading";

const NowPlaying = ({ title }) => {
  const dispatch = useDispatch();

  const { movies, page, loading } = useSelector(
    (state) => state.nowPlayingSlice,
  );

  console.log(movies);

  useEffect(() => {
    dispatch(getNowPlaying({ page }));
  }, [dispatch, page]);

  if (loading) return <Loading />;

  return (
    <>
      <NavBar />
      <ListSkeleton
        movies={movies}
        currentPage={currentPage}
        title={title}
        page={page}
      />
    </>
  );
};

export default NowPlaying;
