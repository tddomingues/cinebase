import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../../slices/popularSlice";
import { getTopRated } from "../../slices/topRatedSlice";

//components
import NavBar from "../../components/NavBar/NavBar";
import GenreId from "../../components/GenreId/GenreId";
import Movies from "./Movies/Movies";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();

  const { movies: popularMovies, loading: popularLoading } = useSelector(
    (state) => state.popularSlice,
  );
  const { movies: topRatedMovies, loading: topRatedLoading } = useSelector(
    (state) => state.topRatedSlice,
  );

  useEffect(() => {
    dispatch(getPopular({ page: 1 }));
    dispatch(getTopRated({ page: 1 }));
  }, [dispatch]);

  if (popularLoading) return <Loading />;

  if (topRatedLoading) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <GenreId />
        <main>
          <Movies title="Mais Avaliados" movies={topRatedMovies} type="rated" />
          <Movies
            title="Mais Populares"
            movies={popularMovies}
            type="popular"
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
