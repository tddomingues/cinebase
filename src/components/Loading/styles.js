import styled from "styled-components"

export const LoadingStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.slate50};  
  display: grid;
  place-items: center;
  animation: loading 1s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;