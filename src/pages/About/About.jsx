import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getByDetails, reset, getCredits } from "../../slices/byDetails";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import DetailsSkeleton from "./components/DetailsSkeleton";

const About = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { details, loading, credits } = useSelector((state) => state.byDetails);

  console.log(credits);

  useEffect(() => {
    dispatch(getByDetails(id));
    dispatch(getCredits(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const detailsLength = Object.keys(details).length;

  if (loading && detailsLength !== 0) return <Loading />;
  if (detailsLength.length === 0) return <Loading />;
  if (credits.length === 0) return <Loading />;

  return (
    <>
      <div className="content">
        <NavBar />
        <DetailsSkeleton
          details={details}
          detailsLength={detailsLength}
          credits={credits}
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
