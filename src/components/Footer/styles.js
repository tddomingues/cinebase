import styled from "styled-components";

export const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate900};
  padding: 1rem 4rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    > span {
      cursor: pointer;

      svg {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
    }
  }

  @media (max-width: 1199px) {
    padding: 1rem;
  }
`;
