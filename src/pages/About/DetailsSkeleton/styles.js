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

  > .background-poster {
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
      padding-bottom: 1rem;

      > h4 {
        font-size: ${({ theme }) => theme.fontSize.lg};
        padding-bottom: 0.125rem;
      }

      > p {
        line-height: 1.3;
      }
    }

    > .btn-video {
      > button {
        border: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: ${({ theme }) => theme.colors.slate50};
        color: ${({ theme }) => theme.colors.slate950};
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.5s ease;

        > svg {
          font-size: ${({ theme }) => theme.fontSize.xl};
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.slate200};
        }
      }
    }
  }

  @media (max-width: 1199px) {
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

        > h4 {
          font-size: ${({ theme }) => theme.fontSize.lg};
          border-bottom: 1px solid ${({ theme }) => theme.colors.slate400};
          padding-bottom: 0.125rem;
        }

        > p {
          padding-top: 0.5rem;
        }
      }
    }
  }
`;
