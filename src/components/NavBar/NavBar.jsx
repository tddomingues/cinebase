import { ContainerNav } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { LuSearch } from "react-icons/lu";
import { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/movies?query=${search}`);
  };

  return (
    <ContainerNav>
      <Link to="/">
        <h1>CINEBASE</h1>
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/movies/popular">Filmes</Link>
          </li>
          <li>
            <Link to="/movies/nowplaying">No Cinema</Link>
          </li>
        </ul>
        <div className="input-search-desktop">
          <form onSubmit={handleSubmit}>
            <label>
              <span>
                <LuSearch />
              </span>
              <input
                type="text"
                placeholder="Qual filme deseja procurar ?"
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
      <div className="input-search-mobile">
        <form onSubmit={handleSubmit}>
          <label>
            <span>
              <LuSearch />
            </span>
            <input
              type="text"
              placeholder="Qual filme deseja procurar ?"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
      </div>
    </ContainerNav>
  );
};

export default NavBar;
