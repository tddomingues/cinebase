import styled from "styled-components";

export const SectionStyle = styled.section`
  margin: 2rem 4rem;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
      padding-bottom: 0.5rem;
      /* font-size: ${({ theme }) => theme.fontSize.lg}; */
      font-weight: 400;
    }

    > p {
      font-size: ${({ theme }) => theme.fontSize.md};
      color: ${({ theme }) => theme.colors.slate500};
      cursor: pointer;
      transition: 0.5s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.slate50};
      }
    }
  }

  > div:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.slate900};
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;

    > .arrows {
      align-self: flex-end;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;

      > span {
        cursor: pointer;
        padding-top: 5px;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.slate500};
        transition: 0.5s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.slate50};
        }
      }
    }

    > .carousel {
      padding: 0 0.5rem 0.5rem 0.5rem;
      display: flex;
      gap: 1rem;
      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;

      > div {
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.slate950};
        padding: 0.5rem;
        cursor: pointer;

        > img {
          filter: brightness(0.8);
          transition: 0.5s ease;
          border-radius: 0.125rem;
          &:hover {
            filter: brightness(1);
          }
        }

        > h3 {
          text-align: center;
          padding-top: 0.5rem;
          font-weight: 400;
          font-size: ${({ theme }) => theme.fontSize.base};
        }
      }
    }
  }

  @media (max-width: 720px) {
    margin: 2rem 1rem;
  }
`;
