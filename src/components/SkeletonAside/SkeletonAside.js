import { Link } from "react-router-dom";

import {
    Box,
} from "./SkeletonAside.style";

const SkeletonAside = ({ type }) => {
    return (
        <Box key={type.id}>
            <Link to={`/movie/${type.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${type.poster_path}`}
                    alt=""
                />
            </Link>
        </Box>
    )
}

export default SkeletonAside
