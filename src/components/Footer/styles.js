import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.slate900};
  padding: 1rem 4rem;

  > span {
    cursor: pointer;

    svg {
      font-size: ${({ theme }) => theme.fontSize["4xl"]};
    }
  }
`;
