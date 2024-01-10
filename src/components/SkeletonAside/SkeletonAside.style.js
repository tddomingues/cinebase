import styled from "styled-components";

export const Box = styled.div`
  & img {
    width: 200px;
    transition: 0.4s;
  }

  & img:hover {
    opacity: 0.8;
  }
`;
