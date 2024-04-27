import styled from "styled-components";

export const SectionStyle = styled.section`
  margin: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.slate900};
  border-radius: 0.5rem;
  > div {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 1rem;
    justify-items: center;
    width: 50%;
    margin: auto;

    > a {
      color: ${({ theme }) => theme.colors.slate300};
      transition: 0.5s ease;
      border-radius: 0.5rem;
      padding: 0.25rem 0.5rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.slate800};
      }
    }
  }

  @media (max-width: 1199px) {
    margin: 2rem 1rem;

    > div {
      width: 100%;
    }
  }
`;
