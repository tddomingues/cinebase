import styled from "styled-components";

export const SectionStyle = styled.section`
  position: relative;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  > .background-image {
    position: absolute;
    background: rgb(2, 6, 23);
    background: linear-gradient(
      360deg,
      rgba(2, 6, 23, 1) 0%,
      rgba(2, 6, 23, 0.31416316526610644) 100%
    );
    top: 0;
    left: 0;
    width: 100%;
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

    > .info {
      align-self: start;
      padding: 0rem 2rem;
      > .overview {
        width: 100%;
      }
    }
  }
`;
