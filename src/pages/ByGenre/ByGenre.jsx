import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { currentPage, getByGenre, reset } from "../../slices/byGenreSlice";

//components
import NavBar from "../../components/NavBar/NavBar";
import ListSkeleton from "../../components/ListSkeleton/ListSkeleton";
import Footer from "../../components/Footer/Footer";

//utils
import { genres } from "../../utils/genres";
import Loading from "../../components/Loading/Loading";

const ByGenre = ({ type }) => {
  const title = genres(type);

  const dispatch = useDispatch();

  const { movies, page, loading, totalPages } = useSelector(
    (state) => state.byGenreSlice,
  );

  useEffect(() => {
    dispatch(getByGenre({ page: page, type: type }));
  }, [dispatch, type, page]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <ListSkeleton
          movies={movies}
          title={title}
          page={page}
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
        />
      </div>
      <Footer />
    </>
  );
};

export default ByGenre;
