import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import ByGenre from "./pages/ByGenre/ByGenre";
import About from "./pages/About/About";
import Popular from "./pages/Popular/Popular";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import Search from "./pages/Search/Search";
import RatedMovies from "./pages/RatedMovies/RatedMovies";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <About />,
      },
      {
        path: "/movies/popular",
        element: <Popular title="Populares" />,
      },
      {
        path: "/movies/nowplaying",
        element: <NowPlaying title="No Cinema" />,
      },
      {
        path: "/movies",
        element: <Search />,
      },
      {
        path: "/movies/rated",
        element: <RatedMovies title="Em Alta" />,
      },
      {
        path: "/genre/action",
        element: <ByGenre type={28} />,
      },
      {
        path: "/genre/comedy",
        element: <ByGenre type={35} />,
      },
      {
        path: "/genre/adventure",
        element: <ByGenre type={12} />,
      },
      {
        path: "/genre/drama",
        element: <ByGenre type={18} />,
      },
      {
        path: "/genre/horror",
        element: <ByGenre type={27} />,
      },
      {
        path: "/genre/animation",
        element: <ByGenre type={16} />,
      },
      {
        path: "/genre/crime",
        element: <ByGenre type={80} />,
      },
      {
        path: "/genre/fantasy",
        element: <ByGenre type={14} />,
      },
      {
        path: "/genre/romance",
        element: <ByGenre type={10749} />,
      },
    ],
  },
]);

export default router;
