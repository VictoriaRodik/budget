import styled from "styled-components";

export const Typography = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 28px;
`;
Typography.displayName = "Typography";
