import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ByGenre from "./pages/ByGenre/ByGenre";
import About from "./pages/About/About";
import Popular from "./pages/Popular/Popular";
import NowPlaying from "./pages/NowPlaying/NowPlaying";
import Search from "./pages/Search/Search";
import RatedMovies from "./pages/RatedMovies/RatedMovies";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/genre/action" element={<ByGenre type={28} />} />
        <Route path="/genre/comedy" element={<ByGenre type={35} />} />
        <Route path="/genre/adventure" element={<ByGenre type={12} />} />
        <Route path="/genre/drama" element={<ByGenre type={18} />} />
        <Route path="/genre/horror" element={<ByGenre type={27} />} />
        <Route path="/genre/animation" element={<ByGenre type={16} />} />
        <Route path="/genre/crime" element={<ByGenre type={80} />} />
        <Route path="/genre/fantasy" element={<ByGenre type={14} />} />
        <Route path="/genre/romance" element={<ByGenre type={10749} />} />

        <Route path="/movie/:id" element={<About />} />
        <Route
          path="/movies/popular"
          element={<Popular title="Filmes Populares" />}
        />
        <Route
          path="/movies/nowplaying"
          element={<NowPlaying title="No Cinema" />}
        />
        <Route path="/movies/rated" element={<RatedMovies title="Em Alta" />} />
        <Route path="/movies" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export const AppRoutes = routes;
