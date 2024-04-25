import React from "react";

import { useNavigate } from "react-router-dom";

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

  return (
    <MainStyle>
      <section>
        <h2>
          {query && "Pesquisa: "}
          {title}
        </h2>
        <div className="movies">
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} onClick={() => handleDetails(movie.id)}>
                <div>
                  <span className="icon-star">
                    <GoStarFill />
                  </span>
                  <span className="vote">{movie.vote_average.toFixed(1)}</span>
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
      </section>
    </MainStyle>
  );
};

export default ListSkeleton;
