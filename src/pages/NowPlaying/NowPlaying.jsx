import React, { useEffect } from "react";

//proptypes
import PropTypes from "prop-types";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying, currentPage } from "../../slices/nowPlayingSlice";

//components
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

const NowPlaying = ({ title }) => {
  const dispatch = useDispatch();

  const { movies, page, loading, totalPages } = useSelector(
    (state) => state.nowPlayingSlice,
  );

  console.log(movies);

  useEffect(() => {
    dispatch(getNowPlaying({ page }));
  }, [dispatch, page]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <ListSkeleton
          movies={movies}
          currentPage={currentPage}
          title={title}
          page={page}
          loading={loading}
          totalPages={totalPages}
        />
      </div>
      <Footer />
    </>
  );
};

NowPlaying.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NowPlaying;
