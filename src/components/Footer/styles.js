import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.slate900};
  padding: 1rem 4rem;

  > p {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  > span {
    cursor: pointer;

    svg {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }

  @media (max-width: 720px) {
    padding: 1rem;
    justify-content: space-evenly;
  }
`;
