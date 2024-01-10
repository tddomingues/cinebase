

import { useGetMovies } from "../../hooks/useGetMovies";

import SkeletonAbout from "../../components/SkeletonAbout/SkeletonAbout";


const MoreAboutMovie = () => {
  const { movieId } = useGetMovies();

  return (
    <SkeletonAbout type={movieId}/>
  );
};

export default MoreAboutMovie;
