import React from "react";

//router
import { useNavigate } from "react-router-dom";

//proptypes
import PropTypes from "prop-types";

//styles
import { MainStyle } from "./styles";
import { GoStarFill } from "react-icons/go";
import imageDefault from "../../assets/image-default.png";

//components
import Pagination from "../Pagination/Pagination";

//redux
import { useDispatch } from "react-redux";

const ListSkeleton = ({
  movies,
  currentPage,
  title,
  totalPages,
  loading,
  page,
  query,
  error,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const paginate = (page) => {
    console.log(page);

    if (query) navigate(`/movies?query=${query}`);

    dispatch(currentPage(page));
  };

  const handleDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleRefresh = () => {
    window.location.reload(true);
  };

  if (error) {
    return (
      <div className="error">
        <p>{error.message}</p>
        <button onClick={handleRefresh}>Carregar</button>
      </div>
    );
  }
  <p></p>;

  return (
    <MainStyle>
      <section>
        <div>
          <h2>{query ? `Pesquisa: ${query}` : title ? title : "Pesquisa"}</h2>
        </div>
        {movies.length > 0 ? (
          <>
            <div className="movies">
              {movies.map((movie) => (
                <div key={movie.id} onClick={() => handleDetails(movie.id)}>
                  <div>
                    <span className="icon-star">
                      <GoStarFill />
                    </span>
                    <span className="vote">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  {movie.backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <img
                      src={imageDefault}
                      alt={movie.title}
                      style={{ width: "100%" }}
                    />
                  )}
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
            <Pagination
              paginate={paginate}
              totalPages={totalPages}
              page={page}
              loading={loading}
            />
          </>
        ) : (
          query &&
          !loading && <p>Não foi encontrado filme(s) com a pesquisa {query}</p>
        )}
      </section>
    </MainStyle>
  );
};

ListSkeleton.propTypes = {
  movies: PropTypes.array.isRequired,
  currentPage: PropTypes.func.isRequired,
  title: PropTypes.string,
  totalPages: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.object,
  query: PropTypes.string,
};

export default ListSkeleton;
