const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2YyYjc2YmVkYmI2NDVhMzQwMWQzMzNhZGFiZDkwYyIsInN1YiI6IjY0YmQ0YTg3YWM2Yzc5MDhlMDg2OGNjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bpdFC5I6myxR7-PX_Co6Agdr3hwBn2V_aGx7zGadVE";

export const apiConfig = (method) => {
  return {
    method,
    hearders: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
};
