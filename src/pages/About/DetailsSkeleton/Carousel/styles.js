import styled from "styled-components";

export const CarouselStyle = styled.section`
  margin: 0rem 4rem 1rem 4rem;

  > div:nth-child(1) {
    padding-bottom: 0.125rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.slate400};
    > h4 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.slate900};
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

  @media (max-width: 1199px) {
    margin: 0rem 1rem 1rem 1rem;
  }
`;
