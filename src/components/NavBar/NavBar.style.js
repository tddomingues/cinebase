import styled from "styled-components";

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fffbff;
  font-weight: bold;

  & h1 {
    color: #f5c518;
    padding: 0px 10px 0px 10px;
    border-left: 20px solid #000;
    border-right: 20px solid #000;
  }

  & a {
    color: #000;
  }
`;
