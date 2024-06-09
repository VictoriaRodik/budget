import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    padding: 0 5px;

    li {
      margin-right: 25px;
      a {
        color: ${({ theme }) => theme.linkColor};
      }
    }
  }
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

Nav.displayName = "Nav";
