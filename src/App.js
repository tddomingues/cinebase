import { Route, Routes, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import MoreAboutMovie from "./pages/MoreAboutMovie/MoreAboutMovie";
import MoreAboutSerie from "./pages/MoreAboutSerie/MoreAboutSerie";
import Search from "./pages/Search/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Banner/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<MoreAboutMovie/>}/>
          <Route path="/serie/:id" element={<MoreAboutSerie/>}/>
          <Route path="/search/" element={<Search/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
