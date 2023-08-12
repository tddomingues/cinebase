import styled from "styled-components";

export const Main = styled.main`
  background-color: #fffbff;
`;

export const SectionMoreAbout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
  padding: 60px 1em 20px 1em;
  max-width: 900px;
  margin: 0 auto;

  & h2 {
    background-color: #000;
    text-align: center;
    font-size: 60px;
    color: #f5c518;
    width: 100%;
    padding: 10px;
  }
`;

export const BoxMoreAbout = styled.div`
  background-color: #000;
  padding: 10px;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 10px;

  & img {
    padding: 10px 0px 10px 0px;
  }

  @media screen and (max-width: 768px) {
    & img {
      width: 300px;
    }
  }

  @media screen and (max-width: 480px) {
    & img {
      width: 200px;
    }
  }
`;

export const InfoBasic = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px 10px 0px;
  background-color: #121212;

  & p {
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Synopsis = styled.div`
  width: 100%;
  padding: 10px 10px 10px 10px;
  background-color: #121212;

  & h4 {
    padding-bottom: 10px;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }

  & p {
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #fff;
  }
`;
