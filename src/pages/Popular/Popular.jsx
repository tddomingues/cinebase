import React, { useEffect } from "react";

//proptypes
import PropTypes from "prop-types";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getPopular, currentPage } from "../../slices/popularSlice";

//components
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";

const Popular = ({ title }) => {
  const dispatch = useDispatch();

  const { movies, page, loading, totalPages } = useSelector(
    (state) => state.popularSlice,
  );

  console.log(totalPages);

  useEffect(() => {
    dispatch(getPopular({ page }));
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

Popular.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Popular;
