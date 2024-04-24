import styled from "styled-components";

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: ${({ theme }) => theme.colors.slate950};
  
  > a > h1 {
    color: ${({ theme }) => theme.colors.slate50};
    padding: 0px 10px 0px 10px;
    border-left: 20px solid ${({ theme }) => theme.colors.slate900};
    border-right: 20px solid ${({ theme }) => theme.colors.slate900};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;  
    width: 50%;
    
    > ul {
      display: flex;
      align-items: center;
      gap: 1rem;

      > li {
        font-weight: 400;
      }
    }

    > div {
      position: relative;
      flex-grow: 1;

      form {
        label {
          > span {
        position: absolute;
        left: 5px;
        top: 7px;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.slate950};
      }
      > input {
        width: 100%;
        padding: 0.5rem 1rem 0.5rem 2.2rem;
        border: none;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.colors.slate50};
        color: ${({ theme }) => theme.colors.slate950};
        cursor: pointer;
        font-weight: 300;
      }
        }
      }

      
    }
  }

`;