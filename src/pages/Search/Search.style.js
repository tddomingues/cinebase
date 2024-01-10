import styled from "styled-components";

export const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 1em 0px 1em;
`;

export const SectionSearch = styled.section`
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 60px;
`;
export const Title = styled.div`
  background-color: #000;
  width: 100%;
  height: 140px;
  padding: 10px;
  display: grid;
  place-items: center;

  & h2 {
    text-align: center;
    font-size: 50px;
    color: #f5c518;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  background-color: #fffbff;
`;

export const ImgTitleMoviePopular = styled.div`
  padding: 10px;
  border: 10px solid #fff;

  & p {
    color: #fffbff;
    font-size: 20px;
    background-color: #000;
    width: 150px;
    text-align: center;
    padding: 5px;
  }
`;
