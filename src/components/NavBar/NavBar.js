import { Nav, Label, Form, Banner } from "./NavBar.style";

import { BiSearchAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <div>
      {/* <Nav>
        <a href="/">CINEBASE</a>
      </Nav> */}
      <Banner>
        <div>
          <Form>
            <Label>
              <input type="text" name="" id=""placeholder="Pesquise um filme..." />
            </Label>
            <button>
              <BiSearchAlt />
            </button>
          </Form>
        </div>
      </Banner>
    </div>
  );
};

export default NavBar;
