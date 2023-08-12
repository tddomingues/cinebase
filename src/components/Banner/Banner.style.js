import styled from "styled-components";
import banner from "../../assets/banner3.png";

export const ContainerBanner = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: grid;
  place-items: center;
`;

export const Form = styled.form`
  display: flex; 
  height: 60px;
  border-radius: 50px;
  background-color: #12121288;
  padding: 10px;

  & label {
    height: 100%;
  }

  & input {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    width: 700px;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 20px;  
  }

  & button {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    height: 100%;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: #fff;
    font-size: 30px;
    color: #f5c518;
    transition: 0.4s;
  }

  & button:hover {
    color: #121212;
  }

  @media screen and (max-width: 1199px) {
    & input {
      width: 600px;
    }
  }

  @media screen and (max-width: 768px) {
    & input {
      width: 300px;
    }
  }

  @media screen and (max-width: 480px) {
    & input {
      width: 240px;
    }
  }
`;
