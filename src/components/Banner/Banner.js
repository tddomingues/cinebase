import { BiSearchAlt } from "react-icons/bi";
import { Label, Form, ContainerBanner } from "./Banner.style";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    navigate(`/search?q=${search}`);

    setSearch("");
  };

  return (
    <ContainerBanner>
      <Form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Pesquisar na Cinebase"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </label>
        <button>
          <BiSearchAlt />
        </button>
      </Form>
    </ContainerBanner>
  );
};

export default Banner;
