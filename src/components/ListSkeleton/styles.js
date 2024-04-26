import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 1rem 4rem;
  > section {
    > div:nth-child(1) {
      padding-bottom: 0.125rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.slate400};

      > h2 {
        font-weight: 400;
      }
    }

    > .movies {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 1rem;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        background-color: ${({ theme }) => theme.colors.slate900};
        cursor: pointer;
        position: relative;

        > div {
          position: absolute;
          top: 10px;
          left: 10px;
          border-radius: 0.5rem;
          z-index: 10;
          background-color: ${({ theme }) => theme.colors.slate950};
          padding: 0.25rem 0.5rem;
          opacity: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;

          > .icon-star {
            color: ${({ theme }) => theme.colors.yellow};
            padding-top: 2px;
          }
        }

        > h3 {
          padding-top: 0.5rem;
          font-weight: 400;
        }

        > img {
          filter: brightness(0.8);
          transition: 0.5s ease;
          width: 100%;

          &:hover {
            filter: brightness(1);
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    padding: 1rem;

    > section {
      > .movies {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }
  }
`;
