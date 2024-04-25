import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.slate900};
  padding: 1rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    > li {
      button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.125rem;
        background-color: ${({ theme }) => theme.colors.slate950};
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.5s ease;

        &:disabled {
          opacity: 0.2;
        }

        > span {
          color: ${({ theme }) => theme.colors.slate50};

          > svg {
            margin-top: 4px;
          }
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.slate800};
        }
      }
    }
  }
`;
