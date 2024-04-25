import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  text-align: center;

  > p {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
    margin-bottom: 1rem;
  }

  > span {
    background-color: ${({ theme }) => theme.colors.slate900};
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.slate800};
    }
  }
`;
