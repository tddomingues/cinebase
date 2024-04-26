import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getByDetails, reset } from "../../slices/byDetails";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import DetailsSkeleton from "./components/DetailsSkeleton";

const About = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { movie, loading } = useSelector((state) => state.byDetails);

  console.log(movie);

  useEffect(() => {
    dispatch(getByDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const movies = Object.keys(movie).length;

  if (loading && movies !== 0) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <DetailsSkeleton movie={movie} movies={movies} />
      </div>
      <Footer />
    </>
  );
};

export default About;
