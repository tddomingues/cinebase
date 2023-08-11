import styled from "styled-components";

export const Container = styled.div``;

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

  @media screen and (max-width: 480px) {
    max-width: 300px;
    & h2 {
      font-size: 40px;
    }
  }
`;

export const BoxImgMoreAbout = styled.div`
  background-color: #000;
  padding: 10px;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 10px;
  & .infoBasic {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px 10px 0px;
    background-color: #121212;
  }

  & .infoBasic p,
  .synopsis p,
  .synopsis h4 {
    color: #fff;
  }

  & img {
    padding: 10px 0px 10px 0px;
  }

  & .synopsis {
    width: 100%;
    padding: 10px 10px 10px 10px;
    background-color: #121212;
  }

  & .synopsis h4 {
    padding-bottom: 10px;
    font-size: 30px;
  }

  & .synopsis p {
    font-size: 20px;
    line-height: 25px;
  }

  @media screen and (max-width: 480px) {
    & img {
      width: 200px;
    }
    & .infoBasic p,
    .synopsis p,
    .synopsis h4 {
      text-align: center;
    }

    & .infoBasic {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const BoxDescription = styled.div``;
