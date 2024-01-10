import { Link } from "react-router-dom";

import {
    BoxMoviePopular,
} from "./MainCardSkeleton.style";

const MainCardSkeleton = ({ type }) => {
    return (
        <BoxMoviePopular key={type.id}>
            <h3>{type.title}</h3>
            <img
                src={`https://image.tmdb.org/t/p/w500/${type.poster_path}`}
                alt=""
            />
            <button>
                <Link to={`/movie/${type.id}`}>Saiba Mais</Link>
            </button>
        </BoxMoviePopular>
    )
}

export default MainCardSkeleton
