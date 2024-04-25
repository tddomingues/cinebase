import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121210;
  width: 100%;
  color: #fffbff;
  padding: 10px 1em 10px 1em;
  margin-top: 10px;

  & span {
    color: #f5c518;
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;
