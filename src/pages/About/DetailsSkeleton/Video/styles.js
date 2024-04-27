import styled from "styled-components";

export const SectionVideo = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  background-color: ${({ theme }) => theme.colors.slate950_transparent};

  > .video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    > button {
      align-self: end;
      margin-bottom: 0.5rem;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.slate100};
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.slate100};
      cursor: pointer;
      transition: 0.5s ease;

      &:hover {
      }
    }
  }

  @media (max-width: 1199px) {
    > .video {
      > iframe {
        width: 800px;
        height: 450px;
      }
    }
  }

  @media (max-width: 480px) {
    > .video {
      > iframe {
        width: 320px;
        height: 180px;
      }
    }
  }
`;
