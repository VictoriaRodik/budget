import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonText};
  border: ${({ theme }) => theme.buttonBorder};
  border-radius: 5px;
  transition: background-color 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0.8)};

  height: 40px;
  padding: 0 21px;
  box-sizing: border-box;

  font-size: 18px;
  margin-right: 10px;
  outline: none;
  width: 150px;
  &:hover {
    background-color: ${({ theme }) => theme.buttonColor};
    opacity: 1;
    cursor: pointer;
  }
`;
Button.displayName = "Button";
