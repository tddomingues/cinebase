import styled from "styled-components";

export const DetailsStyle = styled.section`
  position: relative;
  padding: 10rem 4rem 2rem 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  > .background-image {
    position: absolute;
    background: rgb(2, 6, 23);
    background: radial-gradient(
        circle,
        rgba(2, 6, 23, 0) 0%,
        rgba(2, 6, 23, 1) 90%
      ),
      linear-gradient(180deg, rgba(2, 6, 23, 0.01) 0%, rgba(2, 6, 23, 1) 100%);

    top: 0;
    left: 10%;
    width: 80%;
    height: 100%;

    > img {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
    }
  }

  .background-poster {
    z-index: 1;

    > img {
      border-radius: 0.5rem;
    }
  }

  > .info {
    display: flex;
    flex-direction: column;
    z-index: 1;

    > h2 {
      padding-bottom: 0.125rem;
      font-size: ${({ theme }) => theme.fontSize["4xl"]};
    }

    > .date-time {
      display: flex;
      gap: 0.5rem;
      padding-bottom: 1rem;
    }

    > .vote {
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      > .icon-star {
        color: ${({ theme }) => theme.colors.yellow};
        padding-top: 3px;
      }
    }

    > .genres {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding-bottom: 1rem;

      > span {
        border: 1px solid ${({ theme }) => theme.colors.slate50};
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    }

    > .overview {
      width: 60%;
      > h4 {
        font-size: ${({ theme }) => theme.fontSize.lg};
        padding-bottom: 0.125rem;
      }

      > p {
        line-height: 1.3;
      }
    }
  }

  @media (max-width: 720px) {
    padding: 1rem;
    flex-direction: column;

    > .background-image {
      left: 0;
      width: 100%;
    }

    > .info {
      align-self: start;
      > .overview {
        width: 100%;
      }
    }
  }
`;

export const CreditsStyle = styled.section`
  margin: 0rem 4rem 1rem 4rem;

  > div:nth-child(1) {
    > h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 500;
      padding-bottom: 0.125rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
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

  @media (max-width: 720px) {
    margin: 0rem 1rem 1rem 1rem;
  }
`;
