import React, { useEffect } from "react";
//proptypes
import PropTypes from "prop-types";

//components
import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getTopRated, reset, currentPage } from "../../slices/topRatedSlice";

const RatedMovies = ({ title }) => {
  const dispatch = useDispatch();

  const { movies, loading, page, totalPages } = useSelector(
    (state) => state.topRatedSlice,
  );

  useEffect(() => {
    dispatch(getTopRated({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (movies.length === 0) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <ListSkeleton
          movies={movies}
          loading={loading}
          currentPage={currentPage}
          page={page}
          title={title}
          totalPages={totalPages}
        />
      </div>
      <Footer />
    </>
  );
};

RatedMovies.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RatedMovies;
