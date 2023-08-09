import styled from "styled-components";
import banner from "../../assets/banner3.png";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  & button {
    height: 100%;
    border: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 10px 10px;
    cursor: pointer;
    background-color: #f5c518;
    font-size: 30px;
    color: #fffbff;
    transition: 0.4s;
  }

  & button:hover {
    color: #121212;
  }
`;

export const Label = styled.label`
height: 100%;
  & input {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    width: 700px;
    border: none;
    padding: 5px 10px 5px 10px;
    outline: none;
    font-size: 20px;
  }
`;

export const Banner = styled.div`
  position: relative;
  background-color: #121212;
  padding: 20px 10px 20px 10px;
  width: 100%;
  height: 200px;
  display: grid;
  place-items: center;

  & div {
    padding: 20px;
    background-color: #121212;
    position: absolute;
    bottom: -45px;
    border-radius: 50px;
    border: 2px solid #fffbff;
  }
`;
